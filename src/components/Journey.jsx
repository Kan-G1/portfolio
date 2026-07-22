import { GraduationCap, Briefcase, HeartHandshake } from "lucide-react";
import { education, experience, leadership } from "../data.js";
import Reveal from "./Reveal.jsx";

function Column({ icon: Icon, title, children }) {
  return (
    <div className="glass glass-hover rounded-2xl p-6 sm:p-7">
      <div className="mb-6 flex items-center gap-2.5">
        <span className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-accent-soft">
          <Icon size={16} />
        </span>
        <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-stone-400">
          {title}
        </h3>
      </div>
      <div className="space-y-6">{children}</div>
    </div>
  );
}

function Entry({ role, org, period, location, points }) {
  return (
    <div className="relative border-l border-white/10 pl-5">
      <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_0_4px_rgba(245,166,35,0.15)]" />
      <div className="flex flex-wrap items-baseline justify-between gap-x-3">
        <h4 className="font-display text-base font-semibold text-white">{role}</h4>
        <span className="text-xs text-stone-500">{period}</span>
      </div>
      <div className="mt-0.5 text-sm font-medium text-accent-soft">
        {org}
        {location && <span className="text-stone-600"> · {location}</span>}
      </div>
      <ul className="mt-2.5 space-y-1.5">
        {points.map((p, i) => (
          <li key={i} className="text-sm leading-relaxed text-stone-400">
            {p}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Journey() {
  return (
    <section id="journey" className="relative py-24 sm:py-28">
      <div className="container-x">
        <Reveal className="mb-12 max-w-2xl">
          <span className="chip mb-4">
            <Briefcase size={12} /> Experience &amp; Leadership
          </span>
          <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Beyond the <span className="text-gradient">code</span>
          </h2>
          <p className="mt-4 text-base text-stone-400">
            Where I've studied, worked, and led — the experiences that shape how I
            build and collaborate.
          </p>
        </Reveal>

        {/* Education highlight */}
        <Reveal className="mb-6">
          <div className="glass glass-hover flex flex-col gap-5 rounded-2xl p-6 sm:flex-row sm:items-center sm:p-7">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-accent to-accent-glow text-white shadow-lg shadow-accent/25">
              <GraduationCap size={22} />
            </span>
            <div className="flex-1">
              <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                <h3 className="font-display text-lg font-bold text-white">
                  {education.school}
                </h3>
                <span className="text-sm text-stone-500">
                  {education.period} · {education.location}
                </span>
              </div>
              <p className="mt-0.5 text-sm font-medium text-accent-soft">
                {education.degree}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {education.coursework.map((c) => (
                  <span key={c} className="chip">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Experience + Leadership */}
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <Column icon={Briefcase} title="Experience">
              {experience.map((e) => (
                <Entry key={e.org} {...e} />
              ))}
            </Column>
          </Reveal>
          <Reveal delay={0.08}>
            <Column icon={HeartHandshake} title="Leadership & Community">
              {leadership.map((l) => (
                <Entry key={l.org} {...l} points={[l.point]} />
              ))}
            </Column>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
