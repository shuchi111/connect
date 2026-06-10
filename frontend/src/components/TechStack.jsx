import { motion } from "framer-motion";
import { techStack } from "../data/portfolio";

export default function TechStack() {
  return (
    <section id="stack" data-testid="stack" className="relative py-24 md:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between gap-6 mb-14">
          <div>
            <div className="font-mono text-[11px] tracking-[0.3em] uppercase text-white/40">/ 04 · stack</div>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl tracking-tight">Tools I reach for.</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {techStack.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative bg-zinc-950 border border-white/10 p-6 hover:border-white/30 hover:bg-zinc-900/50 transition-all"
              data-testid={`stack-${cat.category}`}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display text-lg">{cat.category}</h3>
                <span className="font-mono text-[10px] uppercase tracking-widest text-white/40">{cat.items.length}</span>
              </div>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {cat.items.map((t, j) => (
                  <motion.span
                    key={t}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 + j * 0.03 }}
                    className="text-[11px] font-mono uppercase tracking-wider border border-white/10 text-white/75 px-2 py-1 hover:text-white hover:border-blue-400/50 transition-all"
                  >
                    {t}
                  </motion.span>
                ))}
              </div>
              <div className="absolute -inset-px bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-violet-500/0 group-hover:from-blue-500/5 group-hover:via-transparent group-hover:to-violet-500/5 pointer-events-none transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
