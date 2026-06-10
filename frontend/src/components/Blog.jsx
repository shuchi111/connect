import { motion } from "framer-motion";
import { BookOpen, ArrowUpRight } from "lucide-react";
import { blogs } from "../data/portfolio";

export default function Blog() {
  return (
    <section id="blog" data-testid="blog" className="relative py-24 md:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between gap-6 mb-12">
          <div>
            <div className="font-mono text-[11px] tracking-[0.3em] uppercase text-white/40">/ 07 · writing</div>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl tracking-tight">Notes from the build.</h2>
          </div>
          <div className="hidden md:block text-sm text-white/40 font-mono">essays · research notes</div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogs.map((b, i) => (
            <motion.article
              key={b.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              data-testid={`blog-${i}`}
              className="group bg-zinc-950 border border-white/10 p-6 hover:border-white/30 transition-all cursor-pointer"
            >
              <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-widest">
                <span className="text-blue-300">{b.category}</span>
                <span className="text-white/40">{b.readTime}</span>
              </div>
              <h3 className="mt-4 font-display text-lg leading-snug group-hover:text-white">{b.title}</h3>
              <p className="mt-3 text-sm text-white/60 leading-relaxed">{b.excerpt}</p>
              <div className="mt-5 inline-flex items-center gap-1.5 text-xs text-white/50 group-hover:text-white">
                <BookOpen size={12} /> Read <ArrowUpRight size={12} />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
