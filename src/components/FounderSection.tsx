"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import LinkedInIcon from "@/components/icons/LinkedIn";

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  };
}

const CREDENTIALS = [
  "Enterprise systems architecture and cloud platform design",
  "AI/ML product development from prototype to production",
  "Healthcare technology in regulated, high-stakes environments",
  "Product strategy for idea-stage to Series A companies",
  "Workflow automation for operations-heavy SMEs",
];

const FOUNDER_STATS = [
  { label: "Based in",    value: "Hyderabad, India" },
  { label: "Experience",  value: "10+ years" },
  { label: "Focus areas", value: "AI & Healthcare" },
  { label: "Response",    value: "< 24 hours" },
];

export default function FounderSection() {
  return (
    <section className="py-28 md:py-36 relative overflow-hidden" style={{ background: "var(--navy)" }}>
      {/* Top separator */}
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(212,175,55,0.25), transparent)" }}
      />
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 50% 60% at 0% 50%, rgba(212,175,55,0.06) 0%, transparent 50%)" }}
      />

      <div className="relative max-w-6xl mx-auto px-6">

        <motion.div {...fadeUp(0)} className="mb-10">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border"
            style={{ background: "rgba(212,175,55,0.07)", borderColor: "rgba(212,175,55,0.22)" }}
          >
            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--gold)]">
              Founder
            </span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">

          {/* Left: Bio */}
          <motion.div {...fadeUp(0.1)}>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight">
              You&apos;re talking to the person{" "}
              <br className="hidden md:block" />
              <span className="text-gradient-gold">who will build your product.</span>
            </h2>

            <p className="text-base leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.60)" }}>
              <strong className="text-white font-semibold">Ram Amancha</strong> is a technologist and
              business strategist who founded Laxm to give founders and SMEs access to the same
              caliber of technical thinking that large enterprises take for granted — without the
              overhead or the jargon.
            </p>

            <p className="text-base leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.60)" }}>
              With deep experience across enterprise systems, AI product development, and healthcare
              technology, Ram brings both strategic depth and hands-on execution. When you engage
              Laxm, you are working directly with someone who has built the kinds of systems you are
              trying to build.
            </p>

            <div className="h-px w-full mb-8" style={{ background: "linear-gradient(to right, rgba(212,175,55,0.30), transparent)" }} />

            <ul className="space-y-3 mb-10">
              {CREDENTIALS.map((cred) => (
                <li key={cred} className="flex items-start gap-3 text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
                  <span className="text-[var(--gold)] mt-0.5 flex-shrink-0 text-[0.6rem]">◆</span>
                  {cred}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/contact?type=strategy"
                className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full text-[var(--navy)] text-sm font-bold tracking-wide hover:scale-105 transition-all duration-300 overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, var(--gold) 0%, var(--gold-dark) 100%)",
                  boxShadow: "0 0 24px rgba(212,175,55,0.20)",
                }}
              >
                <span className="relative z-10">Talk to Ram</span>
                <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">→</span>
                <span className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/25 to-transparent group-hover:translate-x-[100%] transition-transform duration-700 rounded-full" />
              </Link>

              <a
                href="https://www.linkedin.com/in/ram-amancha/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border text-sm font-semibold transition-all duration-300 hover:text-white"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  borderColor: "rgba(255,255,255,0.10)",
                  color: "rgba(255,255,255,0.60)",
                }}
              >
                <LinkedInIcon className="w-4 h-4" />
                LinkedIn
              </a>

              <a
                href="https://rameshwaramancha.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium transition-colors duration-200 hover:text-[var(--gold)]"
                style={{ color: "rgba(255,255,255,0.35)" }}
              >
                Personal site ↗
              </a>
            </div>
          </motion.div>

          {/* Right: Profile card */}
          <motion.div {...fadeUp(0.2)}>
            <div
              className="relative p-8 rounded-2xl"
              style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              {/* Glow */}
              <div
                className="absolute -top-12 -right-12 w-40 h-40 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(212,175,55,0.12) 0%, transparent 70%)" }}
              />

              {/* Avatar + name */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-bold flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg, rgba(212,175,55,0.20) 0%, rgba(212,175,55,0.05) 100%)",
                    border: "1px solid rgba(212,175,55,0.30)",
                    color: "var(--gold)",
                  }}
                >
                  RA
                </div>
                <div>
                  <div className="text-base font-bold text-white">Ram Amancha</div>
                  <div className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
                    Founder, Laxm OPC Private Limited
                  </div>
                  <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.30)" }}>
                    Hyderabad, India
                  </div>
                </div>
              </div>

              <blockquote
                className="text-sm leading-relaxed italic mb-6"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                &ldquo;I founded Laxm because I kept meeting founders and business owners who had real
                ideas and real problems — but couldn&apos;t find a technical partner they could actually
                trust. Laxm is my answer to that gap.&rdquo;
              </blockquote>

              <div className="h-px w-full mb-6" style={{ background: "rgba(255,255,255,0.06)" }} />

              <div className="grid grid-cols-2 gap-4">
                {FOUNDER_STATS.map((item) => (
                  <div key={item.label}>
                    <div className="text-[10px] tracking-wide mb-0.5" style={{ color: "rgba(255,255,255,0.30)" }}>
                      {item.label}
                    </div>
                    <div className="text-sm font-semibold text-white">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
