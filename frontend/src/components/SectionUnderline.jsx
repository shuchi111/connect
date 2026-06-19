import { motion } from "framer-motion";

// Animated underline that draws in when its parent comes into view.
// Drop it inside a section heading wrapper.
export default function SectionUnderline({ width = "5rem", className = "" }) {
  return (
    <div className={`mt-5 ${className}`} aria-hidden>
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{ width, transformOrigin: "left", height: 2 }}
        className="bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400"
      />
    </div>
  );
}
