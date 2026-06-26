import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Sparkles } from "lucide-react";
import axios from "axios";
import { API } from "../lib/api";
const SESSION_KEY = "shuchi_chat_session";

function genId() {
  return "sess_" + Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [sessionId] = useState(() => {
    const ex = localStorage.getItem(SESSION_KEY);
    if (ex) return ex;
    const nid = genId();
    localStorage.setItem(SESSION_KEY, nid);
    return nid;
  });
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hey! I am Shuchi's portfolio assistant. Ask me about her projects, experience, RAG / agent work, or anything from her resume.",
    },
  ]);
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  const send = async () => {
    const text = input.trim();
    if (!text || busy) return;
    setInput("");
    setMessages((m) => [...m, { role: "user", content: text }]);
    setBusy(true);
    try {
      if (!API) {
        setMessages((m) => [
          ...m,
          {
            role: "assistant",
            content:
              "The live AI assistant needs a hosted backend. Email shuchis9999@gmail.com or browse the portfolio sections for projects, experience, and skills.",
          },
        ]);
        return;
      }
      const { data } = await axios.post(`${API}/chat`, { session_id: sessionId, message: text });
      setMessages((m) => [...m, { role: "assistant", content: data.reply || "(no reply)" }]);
    } catch (e) {
      setMessages((m) => [...m, { role: "assistant", content: "I hit an error. Try again in a moment." }]);
    } finally {
      setBusy(false);
    }
  };

  const suggestions = [
    "What does Shuchi do?",
    "Tell me about her RAG work",
    "Most impactful project?",
  ];

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        data-testid="chatbot-toggle"
        aria-label="Open chat"
        className="fixed bottom-6 right-6 z-50 h-14 w-14 grid place-items-center bg-white text-black rounded-full shadow-[0_8px_32px_rgba(96,165,250,0.4)] hover:scale-105 transition-transform"
      >
        {open ? <X size={20} /> : <MessageSquare size={20} />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.22 }}
            className="fixed bottom-24 right-6 z-50 w-[92vw] max-w-md h-[70vh] max-h-[560px] flex flex-col bg-zinc-950 border border-white/15 backdrop-blur-xl shadow-2xl"
            data-testid="chatbot-window"
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <div className="font-display text-sm">Ask · Shuchi&apos;s AI</div>
                <Sparkles size={12} className="text-blue-300" />
              </div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-white/40">gpt-4o-mini</span>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                  data-testid={`chat-msg-${i}`}
                >
                  <div
                    className={`max-w-[85%] px-3.5 py-2.5 text-sm leading-relaxed ${
                      m.role === "user"
                        ? "bg-white text-black"
                        : "bg-black border border-white/10 text-white/85"
                    }`}
                  >
                    {m.content}
                  </div>
                </div>
              ))}
              {busy && (
                <div className="flex justify-start">
                  <div className="px-3.5 py-2.5 bg-black border border-white/10 text-white/60 text-sm font-mono">
                    thinking<span className="animate-blink">…</span>
                  </div>
                </div>
              )}
              <div ref={endRef} />
            </div>

            {messages.length <= 1 && (
              <div className="px-4 pb-2 flex flex-wrap gap-1.5">
                {suggestions.map((s) => (
                  <button
                    key={s}
                    onClick={() => setInput(s)}
                    data-testid={`chat-suggest-${s}`}
                    className="text-[11px] font-mono uppercase tracking-widest border border-white/10 text-white/65 px-2 py-1 hover:border-white/30 hover:text-white"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            <form
              onSubmit={(e) => { e.preventDefault(); send(); }}
              className="px-4 py-3 border-t border-white/10 flex items-center gap-2"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Shuchi…"
                data-testid="chat-input"
                className="flex-1 bg-black border border-white/10 px-3 py-2.5 text-sm outline-none focus:border-blue-400"
              />
              <button
                type="submit"
                disabled={busy || !input.trim()}
                data-testid="chat-send"
                className="h-10 w-10 grid place-items-center bg-white text-black disabled:opacity-50"
              >
                <Send size={15} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
