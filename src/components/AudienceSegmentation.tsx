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

const FOUNDER_POINTS = [
  "You have a product idea but no technical co-founder",
  "You want to validate market fit before hiring a dev team",
  "You need a technical partner, not just a contractor",
  "You want to understand the build cost before committing capital",
  "You've been burned by offshore agencies before",
];

const SME_POINTS = [
  "Your team runs on spreadsheets and manual processes",
  "Your current software is slowing growth, not enabling it",
  "You want AI adoption but don't know where to actually start",
  "You need transformation without enterprise-level pricing",
  "You want a CTO's perspective without the full-time hire",
];

export default function AudienceSegmentation() {
  return (
    <section className="py-28 md:py-36" style={{ background: "var(--navy)" }}>
      <div className="max-w-6xl mx-auto px-6">

        <motion.div {...fadeUp(0)} className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-6"
            style={{ background: "rgba(212,175,55,0.07)", borderColor: "rgba(212,175,55,0.22)" }}
          >
            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--gold)]">
              Who We Work With
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
            Built for <span className="text-gradient-gold">doers</span>,{" "}
            <br className="hidden md:block" />
            not for enterprise committees.
          </h2>
          <p className="max-w-xl mx-auto text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.50)" }}>
            We work best with people who have a real problem to solve, a business to build, or a
            process to modernize — and who want results, not reports.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">

          {/* Founders panel */}
          <motion.div
            {...fadeUp(0.1)}
            className="group relative p-8 md:p-10 rounded-2xl transition-all duration-500 hover:-translate-y-1"
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
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-base flex-shrink-0"
                style={{ background: "rgba(212,175,55,0.10)", border: "1px solid rgba(212,175,55,0.25)", color: "var(--gold)" }}
              >
                ◈
              </div>
              <div>
                <div className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[var(--gold)]">For</div>
                <div className="text-lg font-bold text-white">Founders &amp; Business Builders</div>
              </div>
            </div>

            <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.50)" }}>
              You&apos;re building something new. You have domain expertise, vision, and drive — but you
              need a trusted technical partner to plan, prototype, and ship your product.
            </p>

            <ul className="space-y-3 mb-8">
              {FOUNDER_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
                  <span className="text-[var(--gold)] mt-0.5 flex-shrink-0 text-[0.6rem]">◆</span>
                  {point}
                </li>
              ))}
            </ul>

            <Link
              href="/contact?type=mvp"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--gold)] hover:gap-3 transition-all duration-200"
            >
              Plan your MVP <span>→</span>
            </Link>
          </motion.div>

          {/* SME panel */}
          <motion.div
            {...fadeUp(0.2)}
            className="group relative p-8 md:p-10 rounded-2xl transition-all duration-500 hover:-translate-y-1"
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
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-base flex-shrink-0"
                style={{ background: "rgba(212,175,55,0.10)", border: "1px solid rgba(212,175,55,0.25)", color: "var(--gold)" }}
              >
                ◇
              </div>
              <div>
                <div className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[var(--gold)]">For</div>
                <div className="text-lg font-bold text-white">SMEs &amp; Operators</div>
              </div>
            </div>

            <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.50)" }}>
              You run a functioning business. The problem isn&apos;t the market — it&apos;s the systems,
              processes, and technology holding you back from scaling efficiently.
            </p>

            <ul className="space-y-3 mb-8">
              {SME_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
                  <span className="text-[var(--gold)] mt-0.5 flex-shrink-0 text-[0.6rem]">◆</span>
                  {point}
                </li>
              ))}
            </ul>

            <Link
              href="/contact?type=advisory"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--gold)] hover:gap-3 transition-all duration-200"
            >
              Get technical guidance <span>→</span>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
