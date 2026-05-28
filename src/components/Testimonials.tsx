"use client";

import { motion } from "framer-motion";

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  };
}

const TESTIMONIALS = [
  {
    quote:
      "Ram turned a half-formed idea into a product we could actually show to investors. The process was structured, transparent, and surprisingly fast. I always knew what was happening and why.",
    author: "Aditya S.",
    role: "Founder",
    company: "HealthTech Startup",
  },
  {
    quote:
      "We were drowning in manual processes. Laxm mapped our entire workflow, identified the highest-leverage automation opportunities, and delivered a working system in under two months. Our ops team got hours of their day back.",
    author: "Priya M.",
    role: "VP Operations",
    company: "Import/Export SME",
  },
  {
    quote:
      "The Fractional CTO engagement gave us exactly what we needed — senior technical judgment without committing to a full-time hire. Ram helped us avoid two expensive architectural mistakes before we started building.",
    author: "Vikram R.",
    role: "CEO",
    company: "B2B SaaS Company",
  },
];

export default function Testimonials() {
  return (
    <section className="py-28 md:py-36 relative overflow-hidden" style={{ background: "var(--navy-light)" }}>
      {/* Top separator */}
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.06), transparent)" }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(212,175,55,0.04) 0%, transparent 60%)" }}
      />

      <div className="relative max-w-6xl mx-auto px-6">

        <motion.div {...fadeUp(0)} className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-6"
            style={{ background: "rgba(212,175,55,0.07)", borderColor: "rgba(212,175,55,0.22)" }}
          >
            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--gold)]">
              Client Feedback
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            What founders and operators{" "}
            <span className="text-gradient-gold">say about working with us</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.author}
              {...fadeUp(i * 0.1)}
              className="flex flex-col p-8 rounded-2xl h-full"
              style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, j) => (
                  <span key={j} className="text-sm" style={{ color: "var(--gold)" }}>★</span>
                ))}
              </div>

              <blockquote
                className="flex-1 text-sm leading-relaxed mb-6"
                style={{ color: "rgba(255,255,255,0.65)" }}
              >
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-3 pt-5 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                  style={{
                    background: "rgba(212,175,55,0.12)",
                    border: "1px solid rgba(212,175,55,0.25)",
                    color: "var(--gold)",
                  }}
                >
                  {t.author[0]}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{t.author}</div>
                  <div className="text-xs" style={{ color: "rgba(255,255,255,0.40)" }}>
                    {t.role} · {t.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
