from fastapi import FastAPI, APIRouter, HTTPException
from fastapi.responses import StreamingResponse
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import json
import httpx
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone

from emergentintegrations.llm.chat import LlmChat, UserMessage, TextDelta, StreamDone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

EMERGENT_LLM_KEY = os.environ.get('EMERGENT_LLM_KEY', '')
GITHUB_USERNAME = os.environ.get('GITHUB_USERNAME', 'shuchishukla')

# Portfolio context for chatbot
PORTFOLIO_CONTEXT = """You are Shuchi's AI assistant — an embedded portfolio chatbot for Shuchi Shukla, an AI Engineer & Data Scientist.

ABOUT SHUCHI:
- AI Engineer | Data Scientist | Agentic AI Builder
- Specializes in Generative AI, RAG systems, Agentic AI, NLP, Computer Vision, Machine Learning, and Data Science
- Builds production-ready AI systems combining ML, LLMs, RAG architectures, and autonomous agents

EXPERIENCE:
1. OsciraAI (Data Scientist) — Jul 2025 to Present
   - Global AI consultancy serving RateCity AU, ProjectPro US, Fi Money IN, Move Up FR
   - AI Agents, RAG solutions, recommendation engines, CTR/ad personalisation
   - Forecasting, statistical ML, A/B testing at scale, MarTech campaign intelligence
   - Built a Football Match Outcome ML prediction game (XGBoost + feature engineering)
   - End-to-end ML pipelines, XGBoost, NLP, sentiment, MLE-Bench
   - Systems serving 100M+ users with <100ms latency at 10k QPS
2. Spacepepper Studio (AI Engineer) — Apr 2025 to Jul 2025
   - Multi-Agent Systems, AI Sales Agents, RAG with Pinecone, Marketing Automation, XGBoost Forecasting, Churn Prediction
   - Impact: 30% lead conversion improvement, 85% campaign profitability
3. PayU (Data Science Intern) — Jul 2024 to Jan 2025
   - Confluence RAG System with Pinecone & Llama3, OCR with Gemini Flash, Document Verification
   - Impact: 18% response accuracy, 15% detection, 20% process efficiency improvements

FEATURED PROJECTS:
1. Agentic RAG · Multi-Tool Knowledge Worker — LangGraph planner/retriever/critic, hybrid retrieval, rerank, self-correction
2. Multi-Agent Sales Intelligence Platform — LangGraph, LangChain, OpenAI, Pinecone, CrewAI
3. Football Match Outcome — XGBoost ML prediction game at OsciraAI (form/ELO/H2H features, calibrated probabilities)
4. Enterprise RAG Knowledge Assistant — Llama3, Pinecone, Embeddings, Vector Search
5. Multi-Zone Intrusion Detection System — YOLOv4-Tiny, SORT, OpenCV, PyQt6
6. Human Pose Estimator — TensorFlow, OpenCV, PoseNet, HRNet
7. Transaction ID Detection System — Gemini, OCR, Computer Vision

TECH STACK:
AI/LLM: GPT, Llama, LangChain, LangGraph, CrewAI, RAG, Pinecone, ChromaDB
ML: XGBoost, Random Forest, SVM, Neural Networks, Attention Models
DL: TensorFlow, PyTorch, CNN, LSTM
Data: Pandas, NumPy, Scikit-Learn, Power BI
Programming: Python, SQL, C++
Cloud: GitHub, GitLab, Google Cloud

ACHIEVEMENTS:
- GHCI Scholar 2024
- Google Women Techmakers Member
- Winner — CGCJ Hackathon
- Solving for India Hackathon Finalist
- MongoDB Competition Winner
- 157-Day GeeksforGeeks Streak
- 100+ Day LeetCode Streak

Be concise, professional, and conversational. Answer ONLY questions related to Shuchi's portfolio, work, projects, skills, and experience. For unrelated questions, politely redirect to portfolio topics. Use 2-4 sentences max unless detail is requested."""


# Main app & router
app = FastAPI()
api_router = APIRouter(prefix="/api")


# -------- Models --------
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class StatusCheckCreate(BaseModel):
    client_name: str


class ChatRequest(BaseModel):
    session_id: str
    message: str


class ContactRequest(BaseModel):
    name: str
    email: str
    message: str


# -------- Routes --------
@api_router.get("/")
async def root():
    return {"message": "Shuchi Shukla — AI Portfolio API"}


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_obj = StatusCheck(**input.model_dump())
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    await db.status_checks.insert_one(doc)
    return status_obj


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    rows = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for r in rows:
        if isinstance(r['timestamp'], str):
            r['timestamp'] = datetime.fromisoformat(r['timestamp'])
    return rows


# -------- Chatbot --------
@api_router.post("/chat/stream")
async def chat_stream(req: ChatRequest):
    if not EMERGENT_LLM_KEY:
        raise HTTPException(status_code=500, detail="LLM key not configured")

    # Persist user message
    await db.chat_messages.insert_one({
        "session_id": req.session_id,
        "role": "user",
        "content": req.message,
        "timestamp": datetime.now(timezone.utc).isoformat()
    })

    chat = LlmChat(
        api_key=EMERGENT_LLM_KEY,
        session_id=req.session_id,
        system_message=PORTFOLIO_CONTEXT,
    ).with_model("openai", "gpt-4o-mini")

    async def event_generator():
        full = ""
        try:
            async for ev in chat.stream_message(UserMessage(text=req.message)):
                if isinstance(ev, TextDelta):
                    full += ev.content
                    yield f"data: {json.dumps({'delta': ev.content})}\n\n"
                elif isinstance(ev, StreamDone):
                    break
            await db.chat_messages.insert_one({
                "session_id": req.session_id,
                "role": "assistant",
                "content": full,
                "timestamp": datetime.now(timezone.utc).isoformat()
            })
            yield f"data: {json.dumps({'done': True})}\n\n"
        except Exception as e:
            logger.exception("chat stream failed")
            yield f"data: {json.dumps({'error': str(e)})}\n\n"

    return StreamingResponse(
        event_generator(),
        media_type="text/event-stream",
        headers={"Cache-Control": "no-cache", "X-Accel-Buffering": "no"},
    )


@api_router.post("/chat")
async def chat_simple(req: ChatRequest):
    """Non-streaming fallback used by frontend for reliability."""
    if not EMERGENT_LLM_KEY:
        raise HTTPException(status_code=500, detail="LLM key not configured")

    await db.chat_messages.insert_one({
        "session_id": req.session_id,
        "role": "user",
        "content": req.message,
        "timestamp": datetime.now(timezone.utc).isoformat()
    })

    chat = LlmChat(
        api_key=EMERGENT_LLM_KEY,
        session_id=req.session_id,
        system_message=PORTFOLIO_CONTEXT,
    ).with_model("openai", "gpt-4o-mini")

    try:
        reply = await chat.send_message(UserMessage(text=req.message))
        await db.chat_messages.insert_one({
            "session_id": req.session_id,
            "role": "assistant",
            "content": reply,
            "timestamp": datetime.now(timezone.utc).isoformat()
        })
        return {"reply": reply}
    except Exception as e:
        logger.exception("chat failed")
        raise HTTPException(status_code=500, detail=str(e))


# -------- GitHub Showcase --------
@api_router.get("/github/profile")
async def github_profile(username: Optional[str] = None):
    user = username or GITHUB_USERNAME
    async with httpx.AsyncClient(timeout=10) as cx:
        try:
            u = await cx.get(f"https://api.github.com/users/{user}")
            repos = await cx.get(
                f"https://api.github.com/users/{user}/repos",
                params={"sort": "updated", "per_page": 12}
            )
            if u.status_code != 200:
                return {"user": None, "repos": [], "error": "GitHub user not found"}
            udata = u.json()
            rdata = repos.json() if repos.status_code == 200 else []
            return {
                "user": {
                    "login": udata.get("login"),
                    "name": udata.get("name"),
                    "avatar_url": udata.get("avatar_url"),
                    "html_url": udata.get("html_url"),
                    "bio": udata.get("bio"),
                    "public_repos": udata.get("public_repos"),
                    "followers": udata.get("followers"),
                    "following": udata.get("following"),
                },
                "repos": [
                    {
                        "name": r.get("name"),
                        "description": r.get("description"),
                        "html_url": r.get("html_url"),
                        "stargazers_count": r.get("stargazers_count"),
                        "forks_count": r.get("forks_count"),
                        "language": r.get("language"),
                        "updated_at": r.get("updated_at"),
                    } for r in rdata if not r.get("fork")
                ][:8],
            }
        except Exception as e:
            logger.exception("github proxy failed")
            return {"user": None, "repos": [], "error": str(e)}


# -------- Contact form --------
@api_router.post("/contact")
async def contact(req: ContactRequest):
    doc = {
        "id": str(uuid.uuid4()),
        "name": req.name,
        "email": req.email,
        "message": req.message,
        "timestamp": datetime.now(timezone.utc).isoformat(),
    }
    await db.contact_messages.insert_one(doc)
    return {"ok": True, "id": doc["id"]}


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
