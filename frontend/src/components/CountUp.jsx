import { useEffect, useRef, useState } from "react";

// Animated count-up that triggers when element enters viewport.
// Supports numeric values and a "+" suffix, e.g. "5+", "100%", "3".
export default function CountUp({ value, duration = 1400, className = "" }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState("0");
  const startedRef = useRef(false);

  // Parse the target into numeric part + suffix
  const match = String(value).match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : "";
  const isNumeric = !!match;

  useEffect(() => {
    if (!isNumeric) {
      setDisplay(String(value));
      return;
    }
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            const t0 = performance.now();
            const tick = (now) => {
              const p = Math.min(1, (now - t0) / duration);
              const eased = 1 - Math.pow(1 - p, 3);
              setDisplay(Math.round(target * eased) + suffix);
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, suffix, duration, isNumeric, value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
