import { Mail, Github, Linkedin, ArrowUpRight, Copy, Check } from "lucide-react";
import { useState } from "react";
import { profile } from "../data.js";
import Reveal from "./Reveal.jsx";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard blocked — no-op */
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-28">
      <div className="container-x">
        <Reveal>
          <div className="glow-ring glass relative overflow-hidden rounded-3xl px-6 py-14 text-center sm:px-10 sm:py-20">
            <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/20 blur-[110px]" />
            <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />

            <div className="relative">
              <span className="chip mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-mint" />
                </span>
                Open to opportunities
              </span>

              <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Let's build something
                <br />
                <span className="text-gradient">worth shipping.</span>
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-base text-zinc-400">
                Have a project, a role, or just an idea? I'd love to hear about it.
                The fastest way to reach me is email.
              </p>

              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <a href={`mailto:${profile.email}`} className="btn-primary">
                  <Mail size={16} /> {profile.email}
                </a>
                <button onClick={copy} className="btn-ghost" aria-label="Copy email">
                  {copied ? <Check size={16} className="text-mint" /> : <Copy size={16} />}
                  {copied ? "Copied" : "Copy"}
                </button>
              </div>

              <div className="mt-8 flex items-center justify-center gap-3">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300 transition-colors hover:border-white/25 hover:text-white"
                >
                  <Github size={16} /> GitHub
                  <ArrowUpRight size={13} className="opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
                {profile.linkedin && (
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300 transition-colors hover:border-white/25 hover:text-white"
                  >
                    <Linkedin size={16} /> LinkedIn
                    <ArrowUpRight size={13} className="opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
