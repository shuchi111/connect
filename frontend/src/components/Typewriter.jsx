import { useEffect, useState } from "react";

// Typewriter — cycles through phrases, types/deletes each.
export default function Typewriter({
  phrases = [],
  typeSpeed = 60,
  deleteSpeed = 35,
  holdMs = 1400,
  className = "",
}) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0); // phrase index
  const [phase, setPhase] = useState("type"); // type | hold | delete

  useEffect(() => {
    if (!phrases.length) return;
    const current = phrases[i % phrases.length];
    let t;
    if (phase === "type") {
      if (text.length < current.length) {
        t = setTimeout(() => setText(current.slice(0, text.length + 1)), typeSpeed);
      } else {
        t = setTimeout(() => setPhase("delete"), holdMs);
      }
    } else if (phase === "delete") {
      if (text.length > 0) {
        t = setTimeout(() => setText(current.slice(0, text.length - 1)), deleteSpeed);
      } else {
        setI((v) => (v + 1) % phrases.length);
        setPhase("type");
      }
    }
    return () => clearTimeout(t);
  }, [text, phase, i, phrases, typeSpeed, deleteSpeed, holdMs]);

  return (
    <span className={className} aria-live="polite">
      {text}
      <span className="animate-blink text-white/70">▌</span>
    </span>
  );
}
