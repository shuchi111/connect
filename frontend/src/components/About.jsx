import { motion } from "framer-motion";
import { aboutParagraphs } from "../data/portfolio";
import CountUp from "./CountUp";
import SectionUnderline from "./SectionUnderline";

export default function About() {
  return (
    <section id="about" data-testid="about" className="relative py-24 md:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4">
          <div className="font-mono text-[11px] tracking-[0.3em] uppercase text-white/40">/ 01 · about</div>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl tracking-tight leading-tight">
            Research-minded.
            <br />
            <span className="text-white/50">Production-obsessed.</span>
          </h2>
          <SectionUnderline />
          <div className="mt-8 grid grid-cols-3 gap-4">
            {[
              { k: "3", l: "Companies" },
              { k: "7+", l: "AI Systems shipped" },
              { k: "100%", l: "End-to-end" },
            ].map((s) => (
              <div key={s.l} className="border-l border-white/10 pl-3">
                <div className="font-display text-3xl"><CountUp value={s.k} /></div>
                <div className="text-[11px] uppercase tracking-widest text-white/40">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-8 space-y-6 text-white/70 leading-relaxed text-base sm:text-lg">
          {aboutParagraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              {p}
            </motion.p>
          ))}

          <div className="mt-8 pt-8 border-t border-white/10 grid sm:grid-cols-2 gap-6 text-sm">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-widest text-white/40 mb-2">Currently focused on</div>
              <div className="text-white/80">Agentic AI · Multi-agent orchestration · Eval harnesses for LLM apps</div>
            </div>
            <div>
              <div className="font-mono text-[11px] uppercase tracking-widest text-white/40 mb-2">Comfort zone</div>
              <div className="text-white/80">Notebook → API → Production · with proper evals and observability</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
