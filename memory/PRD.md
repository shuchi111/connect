# Shuchi Shukla — AI Portfolio · PRD

## Original Problem Statement
World-class AI Engineer & Data Scientist portfolio for Shuchi Shukla — dark theme, premium gradients, AI-startup aesthetic, sections for hero/about/experience/projects/stack/achievements/github/blog/contact + AI chatbot + neural background + terminal aesthetics. React + Tailwind + Framer Motion.

## User Personas
- Recruiters & hiring managers screening AI engineer candidates
- Startup founders looking for AI/ML talent
- Engineering leads evaluating production AI experience

## Architecture
- Backend: FastAPI · MongoDB · emergentintegrations (GPT-4o-mini)
- Frontend: React 19 · CRA · Tailwind · Framer Motion · lucide-react · sonner

## What's Implemented (Dec 2025)
- Hero with neural canvas bg + portrait + 5 social links + marquee tags
- About, Experience timeline (OsciraAI/Spacepepper/PayU with metrics)
- 7 projects incl. Agentic RAG + Football Match Outcome ML game
- Tech Stack (8 categories: AI Agents, RAG, ML, DL, Data, Programming, Cloud, MLOps)
- Achievements (7 cards), GitHub live feed (@shuchi111 · 38 repos)
- Blog section (6 articles), Contact form (persists to Mongo)
- AI chatbot widget (GPT-4o-mini via Emergent Universal Key)
- SEO meta + OG tags + structured site
- Resume PDF placeholder at /Shuchi_Shukla_Resume.pdf

## Backend Endpoints
- GET /api/ · health
- POST /api/chat · portfolio chatbot (gpt-4o-mini)
- POST /api/chat/stream · SSE streaming variant
- GET /api/github/profile · live GitHub API proxy
- POST /api/contact · saves contact form to Mongo

## Backlog (P1)
- Replace placeholder Resume PDF with real CV
- Add custom blog posts (currently 6 sample cards)
- Hook up project GitHub URLs to specific repos
- Optional: Sora/Nano-Banana hero animation

## P2
- Light mode toggle (currently dark only)
- Analytics dashboard
- Newsletter subscription
