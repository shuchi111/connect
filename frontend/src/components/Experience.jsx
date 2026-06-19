import { motion } from "framer-motion";
import { experience } from "../data/portfolio";
import CountUp from "./CountUp";
import SectionUnderline from "./SectionUnderline";

export default function Experience() {
  return (
    <section id="experience" data-testid="experience" className="relative py-24 md:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between gap-6 mb-14">
          <div>
            <div className="font-mono text-[11px] tracking-[0.3em] uppercase text-white/40">/ 02 · experience</div>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl tracking-tight">Shipped, measured, learned.</h2>
            <SectionUnderline />
          </div>
          <div className="hidden md:block text-sm text-white/40 font-mono">3 roles · 1.5 yrs</div>
        </div>

        <div className="relative">
          <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent" />

          {experience.map((e, i) => (
            <motion.div
              key={e.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              data-testid={`exp-${i}`}
              className={`relative mb-10 md:mb-16 md:grid md:grid-cols-2 md:gap-12 ${i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"}`}
            >
              <div className="absolute left-3 md:left-1/2 -translate-x-1/2 top-2 h-3 w-3 rounded-full bg-blue-400 ring-4 ring-blue-400/20" />

              <div className={`pl-10 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                <div className="font-mono text-[11px] uppercase tracking-widest text-white/40">{e.period}</div>
                <h3 className="mt-2 font-display text-2xl">{e.company}</h3>
                <div className="text-white/60 text-sm">{e.role} · {e.location}</div>
              </div>

              <div className={`pl-10 md:pl-0 mt-3 md:mt-0 ${i % 2 === 0 ? "md:pl-12" : "md:text-right md:pr-12"}`}>
                <p className="text-white/75 leading-relaxed">{e.summary}</p>
                <ul className={`mt-4 space-y-1.5 text-sm text-white/60 ${i % 2 === 0 ? "" : "md:list-inside"}`}>
                  {e.highlights.map((h) => (
                    <li key={h} className="flex gap-2 items-start">
                      <span className="text-blue-400/70 mt-1.5">▹</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
                {e.metrics.length > 0 && (
                  <div className={`mt-4 flex flex-wrap gap-2 ${i % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}>
                    {e.metrics.map((m) => {
                      const hasPlus = m.value.startsWith("+");
                      const numericPart = hasPlus ? m.value.slice(1) : m.value;
                      return (
                        <span key={m.label} className="font-mono text-[11px] uppercase tracking-widest border border-emerald-400/30 text-emerald-300 px-2.5 py-1">
                          {hasPlus ? "+" : ""}<CountUp value={numericPart} /> · {m.label}
                        </span>
                      );
                    })}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
