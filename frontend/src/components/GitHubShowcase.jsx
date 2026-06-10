import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Star, GitFork, ArrowUpRight } from "lucide-react";
import axios from "axios";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function GitHubShowcase() {
  const [data, setData] = useState({ user: null, repos: [], loading: true, error: null });

  useEffect(() => {
    let alive = true;
    axios
      .get(`${API}/github/profile`)
      .then((r) => alive && setData({ ...r.data, loading: false }))
      .catch((e) => alive && setData({ user: null, repos: [], loading: false, error: e.message }));
    return () => { alive = false; };
  }, []);

  return (
    <section id="github" data-testid="github" className="relative py-24 md:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between gap-6 mb-12">
          <div>
            <div className="font-mono text-[11px] tracking-[0.3em] uppercase text-white/40">/ 06 · github</div>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl tracking-tight">Open source · live feed.</h2>
          </div>
          <a
            href={data.user?.html_url || "https://github.com"}
            target="_blank"
            rel="noreferrer"
            data-testid="github-profile-link"
            className="hidden md:inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-white"
          >
            <Github size={16} /> profile <ArrowUpRight size={14} />
          </a>
        </div>

        {data.loading && (
          <div className="font-mono text-xs text-white/40">fetching repos…</div>
        )}

        {!data.loading && data.user && (
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1 bg-zinc-950 border border-white/10 p-6">
              <img src={data.user.avatar_url} alt="avatar" className="h-16 w-16 rounded-full ring-2 ring-white/10" />
              <div className="mt-4 font-display text-xl">{data.user.name || data.user.login}</div>
              <div className="text-sm text-white/55">@{data.user.login}</div>
              {data.user.bio && <p className="mt-3 text-sm text-white/65">{data.user.bio}</p>}
              <div className="mt-5 grid grid-cols-3 gap-3 font-mono text-[11px] uppercase tracking-widest">
                <Stat label="repos" value={data.user.public_repos} />
                <Stat label="followers" value={data.user.followers} />
                <Stat label="following" value={data.user.following} />
              </div>
            </div>

            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-3">
              {data.repos.slice(0, 6).map((r, i) => (
                <motion.a
                  key={r.html_url}
                  href={r.html_url}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  data-testid={`repo-${i}`}
                  className="group bg-zinc-950 border border-white/10 p-4 hover:border-white/30 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div className="font-mono text-sm text-white/90 truncate">{r.name}</div>
                    <ArrowUpRight size={14} className="text-white/40 group-hover:text-white" />
                  </div>
                  {r.description && (
                    <p className="mt-1.5 text-xs text-white/60 line-clamp-2">{r.description}</p>
                  )}
                  <div className="mt-3 flex items-center gap-3 text-[11px] text-white/50 font-mono">
                    {r.language && <span>{r.language}</span>}
                    <span className="inline-flex items-center gap-1"><Star size={11} />{r.stargazers_count || 0}</span>
                    <span className="inline-flex items-center gap-1"><GitFork size={11} />{r.forks_count || 0}</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        )}

        {!data.loading && !data.user && (
          <div className="bg-zinc-950 border border-white/10 p-8 text-center">
            <Github size={32} className="text-white/30 mx-auto" />
            <p className="mt-4 text-white/60">GitHub feed will appear once the username is wired up.</p>
            <p className="text-xs text-white/40 mt-1 font-mono">{data.error || "no_user"}</p>
          </div>
        )}
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div className="border-l border-white/10 pl-3">
      <div className="font-display text-xl text-white">{value ?? "—"}</div>
      <div className="text-[10px] text-white/40">{label}</div>
    </div>
  );
}
