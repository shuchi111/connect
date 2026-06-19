import { useEffect, useState } from "react";

// Top-of-page scroll progress bar with subtle gradient.
export default function ScrollProgress() {
  const [p, setP] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setP(max > 0 ? (h.scrollTop / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 h-[2px] z-[60] pointer-events-none"
      aria-hidden
      data-testid="scroll-progress"
    >
      <div
        className="h-full bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400"
        style={{ width: `${p}%`, transition: "width 80ms linear" }}
      />
    </div>
  );
}
