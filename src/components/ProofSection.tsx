"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    step: "01",
    icon: "◈",
    title: "Configure Your Project",
    desc: "Answer 5 quick questions about your goals, industry, and timeline. No calls needed — just clarity.",
  },
  {
    step: "02",
    icon: "◇",
    title: "Receive a Tailored Proposal",
    desc: "Within 24 hours you'll have a personalised scope, timeline, and investment breakdown — zero fluff.",
  },
  {
    step: "03",
    icon: "◆",
    title: "Build With Confidence",
    desc: "An expert team turns your vision into a production-ready solution with full transparency at every stage.",
  },
];

const DIFFERENTIATORS = [
  { icon: "⬡", title: "Enterprise-Grade Quality", desc: "ISO-aligned delivery practices with rigorous QA baked into every sprint." },
  { icon: "⬡", title: "Startup Agility", desc: "Two-week cycles, continuous deployment, and zero bureaucratic drag." },
  { icon: "⬡", title: "Transparent Pricing", desc: "Fixed-scope or T&M — no surprises, no hidden costs, ever." },
  { icon: "⬡", title: "AI-First Architecture", desc: "Every solution is designed for the intelligent enterprise, not retrofitted." },
];

const TRUST_PILLS = [
  "Enterprise-grade security",
  "Flexible engagement models",
  "Agile delivery",
  "Transparent pricing",
  "No vendor lock-in",
  "Ongoing support",
  "IP ownership transferred",
  "NDA on day one",
];

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 32 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as any },
  };
}

export default function ProofSection() {
  return (
    <section className="relative overflow-hidden py-28 md:py-36" style={{ background: "var(--navy)" }}>
      {/* Top separator */}
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(212,175,55,0.35), transparent)" }}
      />
      {/* Bottom separator */}
      <div
        className="absolute bottom-0 inset-x-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.06), transparent)" }}
      />
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(212,175,55,0.07) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* ── Section header ───────────────────────────────────── */}
        <motion.div
          {...fadeUp(0)}
          className="text-center mb-20"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-6"
            style={{
              background: "rgba(212,175,55,0.07)",
              borderColor: "rgba(212,175,55,0.22)",
            }}
          >
            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--gold)]">How It Works</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            From Brief to{" "}
            <span className="text-gradient-gold">Breakthrough</span>
          </h2>
          <p
            className="max-w-xl mx-auto text-lg leading-relaxed"
            style={{ color: "rgba(255,255,255,0.50)" }}
          >
            Our streamlined engagement model gets you from idea to a working product in weeks, not quarters.
          </p>
        </motion.div>

        {/* ── Steps ────────────────────────────────────────────── */}
        <div className="relative grid md:grid-cols-3 gap-6 mb-24">
          {/* Connector line */}
          <div
            className="hidden md:block absolute top-[2.75rem] left-[20%] right-[20%] h-px"
            style={{
              background: "linear-gradient(to right, rgba(212,175,55,0.15), rgba(212,175,55,0.45), rgba(212,175,55,0.15))",
            }}
          />

          {STEPS.map((s, i) => (
            <motion.div key={s.step} {...fadeUp(i * 0.12)} className="group">
              <div
                className="relative flex flex-col items-center text-center p-8 rounded-2xl transition-all duration-500 hover:-translate-y-1"
                style={{
                  background: "rgba(255,255,255,0.025)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
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
                <div className="relative mb-6 z-10">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-xl transition-all duration-300"
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
                <h3 className="text-base font-bold text-white mb-3">{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.42)" }}>
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Differentiators ──────────────────────────────────── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {DIFFERENTIATORS.map((d, i) => (
            <motion.div key={d.title} {...fadeUp(i * 0.08)}>
              <div
                className="p-6 rounded-xl h-full transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <span className="text-[var(--gold)] text-lg block mb-3">{d.icon}</span>
                <h4 className="text-sm font-bold text-white mb-2">{d.title}</h4>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.38)" }}>
                  {d.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Trust pills ──────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-wrap justify-center gap-2.5"
        >
          {TRUST_PILLS.map((item, i) => (
            <motion.span
              key={item}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-medium"
              style={{
                background: "rgba(255,255,255,0.03)",
                borderColor: "rgba(255,255,255,0.07)",
                color: "rgba(255,255,255,0.42)",
              }}
            >
              <span style={{ color: "#4ade80", fontSize: "0.6rem" }}>✓</span>
              {item}
            </motion.span>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
