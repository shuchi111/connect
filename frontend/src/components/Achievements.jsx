import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { achievements } from "../data/portfolio";
import SectionUnderline from "./SectionUnderline";

export default function Achievements() {
  return (
    <section id="achievements" data-testid="achievements" className="relative py-24 md:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between gap-6 mb-14">
          <div>
            <div className="font-mono text-[11px] tracking-[0.3em] uppercase text-white/40">/ 05 · awards</div>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl tracking-tight">Recognized work.</h2>
            <SectionUnderline />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              data-testid={`ach-${i}`}
              className="relative glass p-5 hover:border-white/25 transition-all"
            >
              <div className="flex items-start gap-3">
                <div className="h-9 w-9 grid place-items-center border border-white/10 bg-black">
                  <Trophy size={15} className="text-amber-300" />
                </div>
                <div className="min-w-0">
                  <div className="font-display text-base leading-tight">{a.title}</div>
                  <div className="mt-1 text-xs text-white/55 leading-relaxed">{a.note}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
