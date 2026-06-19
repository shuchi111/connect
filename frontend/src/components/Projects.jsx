import { motion } from "framer-motion";
import { projects } from "../data/portfolio";

function ArchDiagram({ steps }) {
  return (
    <div className="font-mono text-[11px] text-white/70 leading-relaxed bg-black border border-white/10 p-4 overflow-x-auto">
      <div className="text-white/40 mb-2">$ architecture.trace</div>
      {steps.map((s, i) => (
        <div key={i} className="flex items-center gap-2">
          <span className="text-blue-400">{String(i + 1).padStart(2, "0")}</span>
          <span className="text-white/85">{s}</span>
          {i < steps.length - 1 && <span className="text-white/30">↓</span>}
        </div>
      ))}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" data-testid="projects" className="relative py-24 md:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between gap-6 mb-14">
          <div>
            <div className="font-mono text-[11px] tracking-[0.3em] uppercase text-white/40">/ 03 · projects</div>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl tracking-tight">Featured systems.</h2>
          </div>
          <div className="hidden md:block text-sm text-white/40 font-mono">{projects.length} selected · production-tested</div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
              data-testid={`project-${i}`}
              className="group relative bg-zinc-950 border border-white/10 p-6 md:p-7 hover:border-white/25 transition-all"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-widest text-white/40">Project {String(i + 1).padStart(2, "0")}</div>
                  <h3 className="mt-2 font-display text-2xl tracking-tight">{p.title}</h3>
                </div>
              </div>
              <p className="mt-3 text-white/65 leading-relaxed text-sm">{p.blurb}</p>

              <div className="mt-5">
                <ArchDiagram steps={p.architecture} />
              </div>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.stack.map((t) => (
                  <span key={t} className="text-[11px] font-mono uppercase tracking-widest border border-white/10 text-white/70 px-2 py-1 hover:border-white/30 transition-colors">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-5 grid sm:grid-cols-2 gap-4 pt-4 border-t border-white/5">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-white/40 mb-1.5">Key learnings</div>
                  <ul className="text-xs text-white/65 space-y-1">
                    {p.learnings.map((l) => (
                      <li key={l} className="flex gap-1.5"><span className="text-blue-400/70">→</span>{l}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-white/40 mb-1.5">Impact</div>
                  <div className="text-emerald-300 text-sm">{p.impact}</div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
