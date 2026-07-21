import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github, ArrowDown, Sparkles } from "lucide-react";
import { profile, stats } from "../data.js";
import ParticleTextEffect from "./ParticleTextEffect.jsx";

function RotatingRole() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % profile.roles.length), 2600);
    return () => clearInterval(t);
  }, []);
  return (
    <span className="relative inline-block h-9 w-full overflow-hidden align-middle">
      <AnimatePresence mode="wait">
        <motion.span
          key={i}
          initial={{ y: "110%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-110%", opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 block whitespace-nowrap leading-9 text-accent-soft"
        >
          {profile.roles[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-24 sm:pt-48">
      {/* aurora blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid mask-fade-b opacity-70" />
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px] animate-aurora-shift" />
      <div className="pointer-events-none absolute top-24 right-[8%] -z-10 h-72 w-72 rounded-full bg-coral/15 blur-[110px] animate-float" />

      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          {profile.available && (
            <div className="chip mb-7 !py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-mint" />
              </span>
              Available for freelance & full-time
            </div>
          )}

          {/* Real headline for SEO + screen readers; the visual is the canvas below */}
          <h1 className="sr-only">
            Hi, I'm Kanishk — I build things that ship.
          </h1>
          <div className="-ml-1 mt-1 w-full max-w-2xl">
            <ParticleTextEffect
              words={["KANISHK", "GHAI", "I BUILD", "THINGS", "THAT SHIP"]}
            />
          </div>

          <p className="mt-2 text-lg font-medium text-stone-400">
            <RotatingRole />
          </p>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-stone-400 sm:text-lg">
            {profile.tagline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#work" className="btn-primary">
              View my work
              <ArrowUpRight size={16} />
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="btn-ghost">
              <Github size={16} />
              GitHub
            </a>
            <a href="#contact" className="btn-ghost">
              <Sparkles size={16} />
              Let's talk
            </a>
          </div>

          {/* stats */}
          <div className="mt-14 grid max-w-lg grid-cols-3 gap-6">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl font-bold text-white sm:text-4xl">
                  {s.value}
                </div>
                <div className="mt-1 text-xs leading-snug text-stone-500">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <a
        href="#work"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-stone-600 transition-colors hover:text-stone-300 sm:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <ArrowDown size={14} className="animate-bounce" />
      </a>
    </section>
  );
}
