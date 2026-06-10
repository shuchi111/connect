import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, Twitter, BookOpen } from "lucide-react";
import NeuralBackground from "./NeuralBackground";
import { profile } from "../data/portfolio";

const FALLBACK_PHOTO =
  "https://images.unsplash.com/photo-1771072426488-87e6bbcc0cf7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTB8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0JTIwZGFyayUyMGJhY2tncm91bmR8ZW58MHx8fHwxNzgxMTAxOTkzfDA&ixlib=rb-4.1.0&q=85";

export default function Hero() {
  return (
    <section id="top" data-testid="hero" className="relative min-h-screen pt-28 pb-16 overflow-hidden">
      <NeuralBackground />
      <div className="absolute inset-0 grid-bg opacity-30 -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-mono text-[11px] tracking-[0.25em] uppercase text-white/50 mb-6"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 mr-2 animate-pulse" />
            Available for AI Engineering roles · {profile.location}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="font-display font-semibold tracking-tight text-5xl sm:text-6xl lg:text-7xl leading-[1.02]"
            data-testid="hero-heading"
          >
            <span className="gradient-text">Shuchi Shukla.</span>
            <br />
            I build <span className="accent-gradient-text">production AI</span> systems.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-7 max-w-2xl text-base sm:text-lg text-white/65 leading-relaxed"
          >
            {profile.heroStatement}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              data-testid="hero-cta-projects"
              className="group inline-flex items-center gap-2 bg-white text-black px-5 py-3 font-medium hover:bg-white/90 transition-colors"
            >
              View projects
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={profile.resumeUrl}
              download
              data-testid="hero-cta-resume"
              className="inline-flex items-center gap-2 border border-white/15 text-white px-5 py-3 hover:bg-white/5 hover:border-white/30 transition-colors"
            >
              <Download size={16} /> Download resume
            </a>
            <a
              href="#contact"
              data-testid="hero-cta-contact"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white px-3 py-3 transition-colors"
            >
              Contact →
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-10 flex items-center gap-5 text-white/60"
          >
            <a href={profile.github} target="_blank" rel="noreferrer" data-testid="hero-social-github" className="hover:text-white transition-colors" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" data-testid="hero-social-linkedin" className="hover:text-white transition-colors" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href={profile.twitter} target="_blank" rel="noreferrer" data-testid="hero-social-twitter" className="hover:text-white transition-colors" aria-label="X / Twitter">
              <Twitter size={18} />
            </a>
            <a href={profile.medium} target="_blank" rel="noreferrer" data-testid="hero-social-medium" className="hover:text-white transition-colors" aria-label="Medium">
              <BookOpen size={18} />
            </a>
            <a href={`mailto:${profile.email}`} data-testid="hero-social-email" className="hover:text-white transition-colors" aria-label="Email">
              <Mail size={18} />
            </a>
            <span className="font-mono text-[11px] tracking-widest uppercase text-white/30 pl-2">
              ai · ml · rag · agents
            </span>
          </motion.div>
        </div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5"
        >
          <div className="relative max-w-md mx-auto lg:ml-auto">
            <div className="absolute -inset-3 bg-gradient-to-br from-blue-500/30 via-violet-500/20 to-cyan-400/20 blur-2xl opacity-60" />
            <div className="relative border border-white/10 bg-zinc-950 overflow-hidden">
              <img
                src={profile.photo}
                onError={(e) => { if (e.currentTarget.src !== FALLBACK_PHOTO) e.currentTarget.src = FALLBACK_PHOTO; }}
                alt="Shuchi Shukla portrait"
                className="w-full h-[520px] object-cover object-top"
                loading="eager"
                data-testid="hero-portrait"
              />
              <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black via-black/80 to-transparent">
                <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-widest text-white/60">
                  <span>$ whoami</span>
                  <span className="text-emerald-400">→ ai_engineer</span>
                </div>
                <div className="mt-1 font-display text-lg text-white">{profile.name}</div>
                <div className="text-xs text-white/55">{profile.title}</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="mt-16 border-y border-white/10 py-4 overflow-hidden">
        <div className="flex gap-12 animate-marquee whitespace-nowrap font-mono text-xs tracking-[0.3em] uppercase text-white/40">
          {Array(2).fill(0).map((_, i) => (
            <div key={i} className="flex gap-12">
              {["LLMs", "RAG", "LangGraph", "CrewAI", "Pinecone", "XGBoost", "TensorFlow", "PyTorch", "Computer Vision", "MLOps", "Agentic AI"].map((t) => (
                <span key={t}>◆ {t}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
