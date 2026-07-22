import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Lock, ExternalLink } from "lucide-react";
import { projects } from "../data.js";
import Reveal from "./Reveal.jsx";

/* 3D tilt-on-hover wrapper: the card leans toward the cursor and pops up */
function TiltCard({ className = "", children, max = 11 }) {
  const ref = useRef(null);
  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(850px) rotateX(${(-py * max).toFixed(
      2
    )}deg) rotateY(${(px * max).toFixed(2)}deg) translateY(-12px) scale(1.035)`;
  };
  const onLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = "";
  };
  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={className}
      style={{
        transition:
          "transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.5s ease, border-color 0.5s ease",
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}

function domainOf(url) {
  try {
    return new URL(url).host.replace(/^www\./, "");
  } catch {
    return url;
  }
}

function TagRow({ tags }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((t) => (
        <span key={t} className="chip">
          {t}
        </span>
      ))}
    </div>
  );
}

function Links({ p }) {
  return (
    <div className="flex flex-wrap items-center gap-2.5">
      {p.live && (
        <a href={p.live} target="_blank" rel="noreferrer" className="btn-primary !px-4 !py-2 text-xs">
          Visit live <ArrowUpRight size={14} />
        </a>
      )}
      {p.repo && (
        <a href={p.repo} target="_blank" rel="noreferrer" className="btn-ghost !px-4 !py-2 text-xs">
          <Github size={14} /> Code
        </a>
      )}
      {p.repoPrivate && !p.repo && (
        <span className="chip !py-2 text-stone-500">
          <Lock size={12} /> Private repo
        </span>
      )}
    </div>
  );
}

/* Faux browser window used as the preview for live projects */
function BrowserPreview({ p }) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-white/10 bg-ink-900">
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-3.5 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <div className="ml-2 flex-1 truncate rounded-md bg-black/40 px-3 py-1 text-[11px] text-stone-500">
          {p.live ? domainOf(p.live) : "localhost"}
        </div>
      </div>
      <div
        className="relative grid h-44 place-items-center overflow-hidden sm:h-52"
        style={{
          backgroundImage: `radial-gradient(120% 120% at 30% 0%, ${p.accent}33, transparent 60%), radial-gradient(120% 120% at 100% 100%, ${p.accent}22, transparent 55%)`,
        }}
      >
        <div className="absolute inset-0 bg-grid opacity-40" />
        <motion.div
          initial={{ scale: 0.9, opacity: 0.6 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative text-6xl drop-shadow-[0_8px_30px_rgba(0,0,0,0.6)]"
        >
          {p.emoji}
        </motion.div>
        <span className="absolute bottom-3 right-3 font-display text-xs font-semibold uppercase tracking-widest text-white/40">
          {p.name}
        </span>
      </div>
    </div>
  );
}

function FeaturedCard({ p, i }) {
  const primary = p.live || p.repo;
  return (
    <Reveal delay={i * 0.08} className="group relative">
      <TiltCard className="glow-ring glass glass-hover relative flex h-full flex-col gap-5 rounded-2xl p-5 sm:p-6">
        {/* whole card is clickable → primary destination */}
        {primary && (
          <a
            href={primary}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${p.name}`}
            className="absolute inset-0 z-[1] rounded-2xl"
          />
        )}
        <BrowserPreview p={p} />
        <div className="flex items-center justify-between">
          <span
            className="text-xs font-semibold uppercase tracking-wider"
            style={{ color: p.accent }}
          >
            {p.kicker}
          </span>
          <span className="text-xs text-stone-600">{p.year}</span>
        </div>
        <div>
          <h3 className="font-display text-2xl font-bold text-white">{p.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-stone-400">{p.blurb}</p>
          <p className="mt-3 text-sm leading-relaxed text-stone-500">{p.detail}</p>
        </div>
        <div className="relative z-[2] mt-auto space-y-4 pt-1">
          <TagRow tags={p.tags} />
          <Links p={p} />
        </div>
      </TiltCard>
    </Reveal>
  );
}

function GridCard({ p, i }) {
  const primary = p.live || p.repo;
  return (
    <Reveal delay={i * 0.06} className="group relative h-full">
      <TiltCard className="glass glass-hover relative flex h-full flex-col gap-4 overflow-hidden rounded-2xl p-5">
        {primary && (
          <a
            href={primary}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${p.name}`}
            className="absolute inset-0 z-[1] rounded-2xl"
          />
        )}
        {p.image ? (
          <div className="relative -mx-5 -mt-5 mb-1 h-44 overflow-hidden border-b border-white/10 bg-ink-900">
            <img
              src={p.image}
              alt={`${p.name} screenshot`}
              loading="lazy"
              className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 to-transparent" />
          </div>
        ) : (
          <div
            className="relative -mx-5 -mt-5 mb-1 grid h-28 place-items-center border-b border-white/10"
            style={{
              backgroundImage: `radial-gradient(120% 120% at 20% 0%, ${p.accent}2e, transparent 60%)`,
            }}
          >
            <div className="absolute inset-0 bg-grid opacity-40" />
            <span className="relative text-4xl">{p.emoji}</span>
          </div>
        )}

        <div className="flex items-center justify-between">
          <span
            className="text-[11px] font-semibold uppercase tracking-wider"
            style={{ color: p.accent }}
          >
            {p.kicker}
          </span>
          <span className="text-[11px] text-stone-600">{p.year}</span>
        </div>
        <div>
          <h3 className="font-display text-xl font-bold text-white">{p.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-stone-400">{p.blurb}</p>
        </div>
        <div className="relative z-[2] mt-auto space-y-3.5 pt-1">
          <TagRow tags={p.tags} />
          <Links p={p} />
        </div>
      </TiltCard>
    </Reveal>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="work" className="relative py-24 sm:py-28">
      <div className="container-x">
        <Reveal className="mb-12 max-w-2xl">
          <span className="chip mb-4">
            <ExternalLink size={12} /> Selected Work
          </span>
          <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Things I've built &{" "}
            <span className="text-gradient">shipped</span>
          </h2>
          <p className="mt-4 text-base text-stone-400">
            Two of these are live in production today — including a real e-commerce
            business handling actual payments. The rest span mobile, cloud data, and
            observability.
          </p>
        </Reveal>

        {/* Featured — two large cards */}
        <div className="grid gap-6 lg:grid-cols-2">
          {featured.map((p, i) => (
            <FeaturedCard key={p.id} p={p} i={i} />
          ))}
        </div>

        {/* Rest — responsive grid */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((p, i) => (
            <GridCard key={p.id} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
