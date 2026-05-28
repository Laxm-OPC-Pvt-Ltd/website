"use client";

import { motion } from "framer-motion";
import Link from "next/link";

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  };
}

const STEPS = [
  {
    step: "01",
    icon: "◈",
    title: "Discovery Call",
    duration: "30 min · Free",
    desc: "We listen first. You describe your goal, constraints, and timeline. We ask the right questions to understand what you actually need — not what sounds impressive.",
  },
  {
    step: "02",
    icon: "◇",
    title: "Scoped Proposal",
    duration: "Within 48 hours",
    desc: "You receive a clear proposal: scope, timeline, and investment breakdown. No guesswork, no vague estimates, no hidden surprises.",
  },
  {
    step: "03",
    icon: "◆",
    title: "Build &amp; Iterate",
    duration: "Weekly demos",
    desc: "Senior-led execution with full transparency. You see progress every week. Architecture decisions are explained. Nothing happens in a black box.",
  },
  {
    step: "04",
    icon: "◉",
    title: "Launch &amp; Support",
    duration: "Ongoing",
    desc: "We deploy, document, and train your team. You own everything: code, infrastructure, IP. We stay available for iterations and what comes next.",
  },
];

export default function HowWeWork() {
  return (
    <section className="relative overflow-hidden py-28 md:py-36" style={{ background: "var(--navy)" }}>
      {/* Top separator */}
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(212,175,55,0.25), transparent)" }}
      />
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(212,175,55,0.06) 0%, transparent 60%)" }}
      />

      <div className="relative max-w-6xl mx-auto px-6">

        <motion.div {...fadeUp(0)} className="text-center mb-20">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-6"
            style={{ background: "rgba(212,175,55,0.07)", borderColor: "rgba(212,175,55,0.22)" }}
          >
            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--gold)]">
              How We Work
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            From conversation to{" "}
            <span className="text-gradient-gold">working product</span>
          </h2>
          <p className="max-w-xl mx-auto text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.50)" }}>
            A structured, no-ambiguity process. You know exactly what to expect at every stage.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative grid md:grid-cols-4 gap-6 mb-20">
          {/* Connector line */}
          <div
            className="hidden md:block absolute top-[2.75rem] left-[15%] right-[15%] h-px"
            style={{
              background: "linear-gradient(to right, rgba(212,175,55,0.15), rgba(212,175,55,0.45), rgba(212,175,55,0.15))",
            }}
          />

          {STEPS.map((s, i) => (
            <motion.div key={s.step} {...fadeUp(i * 0.1)}>
              <div
                className="relative flex flex-col items-center text-center p-6 md:p-8 rounded-2xl transition-all duration-500 hover:-translate-y-1 h-full"
                style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,175,55,0.30)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.025)";
                }}
              >
                {/* Step badge */}
                <div className="relative mb-5 z-10">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-xl"
                    style={{
                      background: "rgba(212,175,55,0.08)",
                      border: "1px solid rgba(212,175,55,0.25)",
                      color: "var(--gold)",
                    }}
                  >
                    {s.icon}
                  </div>
                  <span
                    className="absolute -top-2 -right-3 text-xs font-extrabold"
                    style={{ color: "rgba(212,175,55,0.55)" }}
                  >
                    {s.step}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-1"
                  dangerouslySetInnerHTML={{ __html: s.title }}
                />
                <div className="text-xs font-medium mb-3" style={{ color: "var(--gold)", opacity: 0.7 }}>
                  {s.duration}
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.42)" }}>
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div {...fadeUp(0.45)} className="text-center">
          <Link
            href="/contact?type=strategy"
            className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full text-[var(--navy)] text-sm font-bold tracking-wide hover:scale-105 active:scale-100 transition-all duration-300 overflow-hidden"
            style={{
              background: "linear-gradient(135deg, var(--gold) 0%, var(--gold-dark) 100%)",
              boxShadow: "0 0 30px rgba(212,175,55,0.25)",
            }}
          >
            <span className="relative z-10">Start with a Discovery Call</span>
            <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">→</span>
            <span className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/25 to-transparent group-hover:translate-x-[100%] transition-transform duration-700 rounded-full" />
          </Link>
          <p className="mt-3 text-xs" style={{ color: "rgba(255,255,255,0.30)" }}>
            Free · No commitment · Honest assessment
          </p>
        </motion.div>

      </div>
    </section>
  );
}
