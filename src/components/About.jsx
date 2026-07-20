import { motion } from "framer-motion";
import { MapPin, Code2 } from "lucide-react";
import { profile, skillGroups, marquee } from "../data.js";
import Reveal from "./Reveal.jsx";

function Marquee() {
  const row = [...marquee, ...marquee];
  return (
    <div className="relative overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]">
      <div className="flex w-max animate-marquee gap-3">
        {row.map((t, i) => (
          <span
            key={i}
            className="whitespace-nowrap rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-zinc-400"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-28">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          {/* left: story */}
          <Reveal>
            <span className="chip mb-4">
              <Code2 size={12} /> About
            </span>
            <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
              I like turning ideas into
              <span className="text-gradient"> real products.</span>
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-zinc-400">
              <p>
                I'm a software developer who's comfortable across the whole stack —
                from pixel-level frontend polish to serverless backends, mobile apps,
                and cloud data pipelines. I care most about work that actually ships
                and gets used.
              </p>
              <p>
                Recently that's meant building{" "}
                <span className="text-zinc-200">Mobsmart</span>, a live e-commerce
                store processing real payments, and{" "}
                <span className="text-zinc-200">Checklist</span>, an AI system that
                turns messy stakeholder feedback into structured software requirements.
                I enjoy the messy middle — payments, auth, data modeling, and making
                things feel fast.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-2 text-sm text-zinc-500">
              <MapPin size={15} className="text-accent-soft" />
              {profile.location}
            </div>
          </Reveal>

          {/* right: skills */}
          <Reveal delay={0.1}>
            <div className="glass rounded-2xl p-6 sm:p-7">
              <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-zinc-500">
                Toolbox
              </h3>
              <div className="mt-5 space-y-5">
                {skillGroups.map((g, gi) => (
                  <motion.div
                    key={g.label}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: gi * 0.06 }}
                  >
                    <div className="mb-2 text-xs font-semibold text-accent-soft">
                      {g.label}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {g.items.map((s) => (
                        <span key={s} className="chip">
                          {s}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.05} className="mt-14">
          <Marquee />
        </Reveal>
      </div>
    </section>
  );
}
