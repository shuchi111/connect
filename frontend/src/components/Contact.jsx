import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, Twitter, BookOpen } from "lucide-react";
import axios from "axios";
import { toast } from "sonner";
import { profile } from "../data/portfolio";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [busy, setBusy] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Fill all fields to send.");
      return;
    }
    setBusy(true);
    try {
      await axios.post(`${API}/contact`, form);
      toast.success("Message sent. I will get back soon.");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      toast.error("Failed to send. Try again or email directly.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <section id="contact" data-testid="contact" className="relative py-24 md:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <div className="font-mono text-[11px] tracking-[0.3em] uppercase text-white/40">/ 08 · contact</div>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl tracking-tight leading-tight">
            Interested in building AI products together?
            <br />
            <span className="text-white/50">Let&apos;s connect.</span>
          </h2>

          <div className="mt-8 space-y-3">
            <a href={`mailto:${profile.email}`} data-testid="contact-email" className="group flex items-center gap-3 text-white/75 hover:text-white">
              <span className="h-9 w-9 grid place-items-center border border-white/10"><Mail size={15} /></span>
              <span className="font-mono text-sm">{profile.email}</span>
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" data-testid="contact-github" className="group flex items-center gap-3 text-white/75 hover:text-white">
              <span className="h-9 w-9 grid place-items-center border border-white/10"><Github size={15} /></span>
              <span className="font-mono text-sm">github.com/shuchi111</span>
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" data-testid="contact-linkedin" className="group flex items-center gap-3 text-white/75 hover:text-white">
              <span className="h-9 w-9 grid place-items-center border border-white/10"><Linkedin size={15} /></span>
              <span className="font-mono text-sm">linkedin.com/in/shuchi-shukla</span>
            </a>
            <a href={profile.twitter} target="_blank" rel="noreferrer" data-testid="contact-twitter" className="group flex items-center gap-3 text-white/75 hover:text-white">
              <span className="h-9 w-9 grid place-items-center border border-white/10"><Twitter size={15} /></span>
              <span className="font-mono text-sm">x.com/shuchi_0_0</span>
            </a>
            <a href={profile.medium} target="_blank" rel="noreferrer" data-testid="contact-medium" className="group flex items-center gap-3 text-white/75 hover:text-white">
              <span className="h-9 w-9 grid place-items-center border border-white/10"><BookOpen size={15} /></span>
              <span className="font-mono text-sm">medium.com/@shuchi0_0</span>
            </a>
          </div>

          <div className="mt-10 bg-black border border-white/10 p-5 font-mono text-xs">
            <div className="text-white/40">$ shuchi --status</div>
            <div className="mt-1.5 text-emerald-300">→ available_for: AI Engineering, Data Science, Agentic AI</div>
            <div className="text-blue-300">→ timezone: IST · open to remote</div>
            <div className="text-white/70">→ response_time: usually within 24h<span className="animate-blink">▌</span></div>
          </div>
        </div>

        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 bg-zinc-950 border border-white/10 p-6 md:p-8 space-y-4"
          data-testid="contact-form"
        >
          <Field label="Name">
            <input
              data-testid="contact-name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Your name"
              className="w-full bg-black border border-white/10 px-3 py-3 text-sm outline-none focus:border-blue-400 transition-colors"
            />
          </Field>
          <Field label="Email">
            <input
              data-testid="contact-email-input"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="you@company.com"
              className="w-full bg-black border border-white/10 px-3 py-3 text-sm outline-none focus:border-blue-400 transition-colors"
            />
          </Field>
          <Field label="Message">
            <textarea
              data-testid="contact-message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Tell me what you're building…"
              rows={6}
              className="w-full bg-black border border-white/10 px-3 py-3 text-sm outline-none focus:border-blue-400 transition-colors resize-none"
            />
          </Field>
          <button
            type="submit"
            disabled={busy}
            data-testid="contact-submit"
            className="inline-flex items-center gap-2 bg-white text-black px-5 py-3 font-medium hover:bg-white/90 disabled:opacity-60 transition-all"
          >
            {busy ? "Sending…" : <>Send message <Send size={14} /></>}
          </button>
        </motion.form>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/40 font-mono">
        <div>© {new Date().getFullYear()} Shuchi Shukla · Built with React + FastAPI</div>
        <div>v1.0.0 · ai_engineer @ shuchi.ai</div>
      </div>
    </section>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <div className="font-mono text-[10px] uppercase tracking-widest text-white/40 mb-1.5">{label}</div>
      {children}
    </label>
  );
}
