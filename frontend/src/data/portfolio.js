// Portfolio data for Shuchi Shukla
export const profile = {
  name: "Shuchi Shukla",
  title: "AI Engineer · Data Scientist · Agentic AI Builder",
  tagline:
    "Building Intelligent Systems with LLMs, RAG, Multi-Agent Workflows, and Machine Learning.",
  heroStatement:
    "I build production-ready AI systems that combine Machine Learning, LLMs, RAG architectures, and autonomous agents to solve real business problems.",
  photo: "/shuchi.png",
  email: "shuchis9999@gmail.com",
  github: "https://github.com/shuchi111",
  linkedin: "https://www.linkedin.com/in/shuchi-shukla",
  medium: "https://medium.com/@shuchi0_0",
  twitter: "https://x.com/shuchi_0_0",
  resumeUrl: "/Shuchi_Shukla_Resume.pdf",
  location: "India · Remote",
};

export const aboutParagraphs = [
  "I'm an AI Engineer and Data Scientist focused on shipping production-grade intelligence. My work spans Generative AI, RAG systems, agentic workflows, NLP, computer vision, and classical machine learning — the kind of full-stack ML that takes a model from notebook to a system serving real users.",
  "Across PayU, Spacepepper Studio, and OsciraAI I've built enterprise RAG assistants on Llama3 + Pinecone, multi-agent sales platforms with LangGraph and CrewAI, OCR pipelines with Gemini Flash, recommendation and CTR-optimisation systems, and forecasting/churn models with XGBoost — each one tied to a measurable business outcome.",
  "I move between research and deployment: data wrangling, feature engineering, evaluation harnesses, prompt + retrieval architecture, agent orchestration, A/B testing at scale, and the boring-but-critical infra glue that makes AI products actually work in the wild.",
];

export const experience = [
  {
    company: "OsciraAI",
    role: "Data Scientist",
    period: "Jul 2025 — Present",
    location: "Remote · Global",
    summary:
      "Building production AI for global clients (RateCity AU, ProjectPro US, Fi Money IN, Move Up FR) — AI Agents, RAG, recommendation engines, CTR optimisation, forecasting, and A/B testing at scale.",
    highlights: [
      "AI Agents · autonomous decision-making systems",
      "RAG solutions over proprietary enterprise data",
      "Recommendation engines + dynamic ranking (revenue-aware)",
      "Ad / CTR optimisation & personalisation at scale",
      "Forecasting + statistical ML (classification, regression)",
      "MarTech / campaign intelligence + A/B testing frameworks",
      "Sports analytics — football match prediction project",
      "End-to-end ML pipelines (ingestion → features → eval)",
      "XGBoost · NLP · sentiment analysis · MLE-Bench",
    ],
    metrics: [
      { label: "Latency at 10k QPS", value: "<100ms" },
      { label: "User scale", value: "100M+" },
    ],
  },
  {
    company: "Spacepepper Studio",
    role: "AI Engineer",
    period: "Apr 2025 — Jul 2025",
    location: "Remote",
    summary:
      "Built multi-agent sales intelligence and marketing automation platforms with RAG and forecasting.",
    highlights: [
      "Multi-agent systems for AI sales agents",
      "RAG architecture on Pinecone",
      "Marketing automation + campaign intelligence",
      "XGBoost forecasting & churn prediction",
    ],
    metrics: [
      { label: "Lead conversion uplift", value: "+30%" },
      { label: "Campaign profitability", value: "85%" },
    ],
  },
  {
    company: "PayU",
    role: "Data Science Intern",
    period: "Jul 2024 — Jan 2025",
    location: "India",
    summary:
      "Shipped a Confluence RAG assistant and OCR-based document verification pipelines used in production support.",
    highlights: [
      "Confluence RAG with Pinecone + Llama3",
      "Semantic search over enterprise docs",
      "OCR pipelines with Gemini Flash",
      "Document verification automation",
    ],
    metrics: [
      { label: "Response accuracy", value: "+18%" },
      { label: "Fraud detection", value: "+15%" },
      { label: "Process efficiency", value: "+20%" },
    ],
  },
];

export const projects = [
  {
    title: "Agentic RAG · Multi-Tool Knowledge Worker",
    blurb:
      "Advanced agentic RAG system that reasons over heterogeneous corpora, plans multi-step retrieval, calls tools (SQL, vector, web), and self-critiques answers with citations.",
    stack: ["LangGraph", "LangChain", "OpenAI", "Pinecone", "Cohere Rerank", "FastAPI"],
    learnings: [
      "Planner → Retriever → Reasoner → Critic graph in LangGraph",
      "Hybrid retrieval (dense + BM25) with cross-encoder reranking",
      "Tool budgets, max-depth, and reflexion-style self-correction",
      "Faithfulness, answer-relevance and groundedness evals",
    ],
    impact: "Higher answer faithfulness & lower hallucination on long-tail enterprise queries",
    github: "https://github.com/shuchi111/GenAI-Projects",
    architecture: [
      "User Query",
      "Planner Agent",
      "Hybrid Retriever (Dense + BM25)",
      "Reranker → Tool Router",
      "Reasoner + Self-Critic",
      "Grounded Answer + Citations",
    ],
  },
  {
    title: "TradingAgents · Multi-Agent LLM Financial Trading",
    blurb:
      "A multi-agent LLM framework for financial trading: research analysts, risk managers, and a trader agent collaborate to make calibrated, explainable trade decisions on market data.",
    stack: ["LangGraph", "OpenAI", "Pandas", "yfinance", "Python", "Backtesting"],
    learnings: [
      "Role-specialised agents (analyst · risk · trader · debater)",
      "Structured tool-calling over market data + indicators",
      "Backtest harness + portfolio-aware decision policies",
      "Cost-aware LLM orchestration with reasoning budgets",
    ],
    impact: "Open-source framework — explainable agentic trading research",
    github: "https://github.com/shuchi111/TradingAgents-Fintech",
    architecture: [
      "Market Data · Indicators",
      "Analyst Agents (Fundamental · Technical · News)",
      "Debate / Reflection Layer",
      "Risk Manager Agent",
      "Trader Agent → Order",
    ],
  },
  {
    title: "Multi-Agent Sales Intelligence Platform",
    blurb:
      "Autonomous agents that qualify leads, analyze intent, retrieve knowledge, and support sales decisions in real time.",
    stack: ["LangGraph", "LangChain", "OpenAI", "Pinecone", "CrewAI"],
    learnings: [
      "Agent role decomposition (qualifier → analyst → strategist)",
      "Tool-calling + retrieval over CRM + product docs",
      "Guarded LLM output schemas for sales handoff",
    ],
    impact: "30% lead conversion uplift in pilot deployment",
    github: "https://github.com/shuchi111/GenAI-Projects",
    architecture: [
      "User Intent",
      "Router Agent",
      "Retriever (Pinecone RAG)",
      "Qualifier · Analyst · Strategist Agents",
      "Decision + CRM Sync",
    ],
  },
  {
    title: "Football Match Outcome — ML Prediction Game",
    blurb:
      "Sports-analytics game built at OsciraAI: an end-to-end XGBoost + feature-engineered pipeline that predicts match outcomes from team form, player stats and historicals, wrapped in a playable game UI.",
    stack: ["XGBoost", "Pandas", "Scikit-Learn", "FastAPI", "React"],
    learnings: [
      "Time-aware feature engineering (rolling form, ELO, H2H)",
      "Calibration: Platt scaling & isotonic for probability outputs",
      "Backtesting harness + leak-proof train/val/test splits",
      "Game loop UX with confidence bars + explainability",
    ],
    impact: "Used as a public demo of OsciraAI's predictive ML stack",
    github: "https://github.com/shuchi111",
    architecture: [
      "Match Data + Player Stats",
      "Feature Pipeline (form · ELO · H2H)",
      "XGBoost Predictor",
      "Probability Calibration",
      "Game UI · Confidence + SHAP",
    ],
  },
  {
    title: "Enterprise RAG Knowledge Assistant",
    blurb:
      "Production RAG system over enterprise Confluence — semantic search, hybrid retrieval and answer grounding.",
    stack: ["Llama3", "Pinecone", "Embeddings", "Hybrid Search", "RAG"],
    learnings: [
      "Chunking strategy + parent-child retrieval",
      "Evaluation: faithfulness, answer relevance, context recall",
      "Streaming + citation rendering",
    ],
    impact: "18% accuracy uplift, 20% support process efficiency",
    github: "https://github.com/shuchi111/GenAI-Projects",
    architecture: [
      "Docs (Confluence)",
      "Embed + Index (Pinecone)",
      "Hybrid Retriever",
      "Llama3 + Citations",
      "Answer + Trace",
    ],
  },
  {
    title: "Multi-Zone Intrusion Detection System",
    blurb:
      "Real-time multi-zone intrusion monitoring with object detection and tracking for CCTV streams.",
    stack: ["YOLOv4-Tiny", "SORT", "OpenCV", "PyQt6"],
    learnings: [
      "Edge-efficient YOLO variant + tracker",
      "Polygon zone logic for alerts",
      "PyQt6 operator dashboard",
    ],
    impact: "Real-time alerts across configurable zones",
    github: "https://github.com/shuchi111/Multi-Zone-Intrusion-Detector",
    architecture: [
      "Camera Stream",
      "YOLOv4-Tiny Detect",
      "SORT Tracker",
      "Zone Logic",
      "Alert + UI",
    ],
  },
  {
    title: "Human Pose Estimator",
    blurb:
      "Pose estimation pipeline with optimized preprocessing and deep learning backbones.",
    stack: ["TensorFlow", "OpenCV", "PoseNet", "HRNet"],
    learnings: [
      "Backbone comparison: PoseNet vs HRNet",
      "Augmentation strategy + keypoint smoothing",
      "Latency vs accuracy tradeoffs",
    ],
    impact: "Robust pose tracking on consumer hardware",
    github: "https://github.com/shuchi111",
    architecture: [
      "Frame Capture",
      "Preprocess + Norm",
      "HRNet / PoseNet",
      "Keypoint Smoothing",
      "Skeleton Render",
    ],
  },
  {
    title: "Transaction ID Detection System",
    blurb:
      "OCR + Gemini-powered automated extraction of transaction identifiers from screenshots for support workflows.",
    stack: ["Gemini", "OCR", "Computer Vision", "Automation"],
    learnings: [
      "Layout-aware OCR + LLM post-correction",
      "Confidence thresholds + human-in-the-loop",
      "End-to-end automation hooks",
    ],
    impact: "15% detection uplift, 20% process efficiency",
    github: "https://github.com/shuchi111",
    architecture: [
      "Screenshot Upload",
      "OCR Extract",
      "Gemini Reasoner",
      "Validator",
      "Support CRM",
    ],
  },
];

export const techStack = [
  {
    category: "AI Agents & LLM",
    items: ["GPT", "Llama", "LangChain", "LangGraph", "CrewAI", "Tool-Calling", "Function Routing", "Self-Critique"],
  },
  {
    category: "RAG & Retrieval",
    items: ["RAG", "Hybrid Search", "Pinecone", "ChromaDB", "Embeddings", "Reranking", "Vector Search"],
  },
  {
    category: "Machine Learning",
    items: ["XGBoost", "Random Forest", "SVM", "Neural Networks", "Attention", "Calibration", "A/B Testing"],
  },
  {
    category: "Deep Learning",
    items: ["TensorFlow", "PyTorch", "CNN", "LSTM", "Transformers"],
  },
  {
    category: "Data Science",
    items: ["Pandas", "NumPy", "Scikit-Learn", "Power BI", "Feature Engineering"],
  },
  {
    category: "Programming",
    items: ["Python", "SQL", "C++", "FastAPI"],
  },
  {
    category: "Cloud & Tools",
    items: ["GitHub", "GitLab", "Google Cloud", "Docker"],
  },
  {
    category: "MLOps & Eval",
    items: ["MLflow", "RAGAS", "Faithfulness", "Answer Relevance", "Latency Budgets"],
  },
];

export const achievements = [
  { title: "GHCI Scholar 2024", note: "Grace Hopper Celebration India scholarship cohort." },
  { title: "Google Women Techmakers", note: "Active member of the global WTM community." },
  { title: "Winner — CGCJ Hackathon", note: "First place in inter-college hackathon." },
  { title: "Solving for India — Finalist", note: "Nationwide builder competition finalist." },
  { title: "MongoDB Competition Winner", note: "Best use of MongoDB Atlas + Vector Search." },
  { title: "157-Day GFG Streak", note: "Consecutive daily problem-solving on GeeksforGeeks." },
  { title: "100+ Day LeetCode Streak", note: "Sustained algorithmic practice on LeetCode." },
];

export const blogs = [
  {
    title: "Breaking the Paper Ceiling: How Agentic Document Extraction (ADE) is Rewiring Healthcare Data",
    category: "Agentic AI",
    source: "Medium",
    excerpt:
      "How agentic document extraction pipelines are unlocking unstructured clinical data — and what makes them production-grade in healthcare.",
    readTime: "Medium · 8 min",
    url: "https://medium.com/@shuchi0_0/breaking-the-paper-ceiling-how-agentic-document-extraction-ade-is-rewiring-healthcare-data-aaf9ce1c06ea",
  },
  {
    title: "Testing the Capabilities of AI Agents in ML Engineering using MLE-Bench",
    category: "LLM Engineering",
    source: "Medium",
    excerpt:
      "A practitioner's walk through MLE-Bench — what it actually measures, where agents shine, and where they still fall apart.",
    readTime: "Medium · 7 min",
    url: "https://medium.com/@shuchi0_0/testing-the-capabilities-of-ai-agents-in-machine-learning-engineering-using-mle-bench-4e1461622b3f",
  },
  {
    title: "Add Long-Term Memory to AI Coding Agents",
    category: "Agentic AI",
    source: "Medium",
    excerpt:
      "Designing long-term memory for coding agents — retrieval, summarisation, and the contract between memory and the planner loop.",
    readTime: "Medium · 6 min",
    url: "https://medium.com/@shuchi0_0/add-long-term-memory-to-ai-coding-agents-b703ef770603",
  },
  {
    title: "Python · SymPy · Mathematics",
    category: "Python",
    source: "LinkedIn",
    excerpt:
      "Quick exploration of symbolic mathematics with SymPy — clean code patterns for math-first Python workflows.",
    readTime: "LinkedIn post",
    url: "https://www.linkedin.com/posts/shuchi-shukla_python-sympy-mathematics-activity-7304229470981304320-2leJ",
  },
  {
    title: "Web Scraping · No-Code Easy",
    category: "Automation",
    source: "LinkedIn",
    excerpt:
      "Fast, low-effort web scraping tactics for analysts and data scientists — when no-code is the right call.",
    readTime: "LinkedIn post",
    url: "https://www.linkedin.com/posts/shuchi-shukla_webscraping-nocodeeasy-activity-7307859694289567744-5tS4",
  },
];
