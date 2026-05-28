"use client";

import { useState } from "react";
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

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const TRUST_PILLS = [
  "NDA on day one",
  "IP ownership transferred",
  "Free discovery call",
  "No vendor lock-in",
];

export default function LeadCaptureCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || !EMAIL_RE.test(trimmed)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      // Replace with actual newsletter / CRM endpoint
      await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed }),
      });
    } catch {
      // Fail silently — treat optimistically
    }
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <section className="relative overflow-hidden py-28 md:py-36" style={{ background: "var(--navy-light)" }}>
      {/* Top separator */}
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(212,175,55,0.30), transparent)" }}
      />
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(212,175,55,0.07) 0%, transparent 65%)" }}
      />

      <div className="relative max-w-4xl mx-auto px-6 text-center">

        {/* Status pill */}
        <motion.div {...fadeUp(0)} className="mb-4">
          <div
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border mb-8"
            style={{ background: "rgba(212,175,55,0.07)", borderColor: "rgba(212,175,55,0.22)" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
            </span>
            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--gold)]">
              Accepting New Clients
            </span>
          </div>
        </motion.div>

        <motion.h2
          {...fadeUp(0.1)}
          className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight"
        >
          Ready to build something{" "}
          <br className="hidden md:block" />
          <span className="text-gradient-gold">worth building?</span>
        </motion.h2>

        <motion.p
          {...fadeUp(0.15)}
          className="text-lg leading-relaxed mb-10 max-w-xl mx-auto"
          style={{ color: "rgba(255,255,255,0.55)" }}
        >
          Start with a free 30-minute strategy call. No pitch, no pressure. Just an honest
          conversation about what you&apos;re trying to build and whether we&apos;re the right fit.
        </motion.p>

        {/* Primary CTAs */}
        <motion.div
          {...fadeUp(0.2)}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14"
        >
          <Link
            href="/contact?type=strategy"
            className="group relative inline-flex items-center gap-2 px-10 py-4 rounded-full text-[var(--navy)] text-sm font-bold tracking-wide hover:scale-105 active:scale-100 transition-all duration-300 overflow-hidden"
            style={{
              background: "linear-gradient(135deg, var(--gold) 0%, var(--gold-dark) 100%)",
              boxShadow: "0 0 40px rgba(212,175,55,0.30)",
            }}
          >
            <span className="relative z-10">Book a Strategy Call</span>
            <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">→</span>
            <span className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/25 to-transparent group-hover:translate-x-[100%] transition-transform duration-700 rounded-full" />
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border text-sm font-semibold transition-all duration-300 hover:text-white"
            style={{
              background: "rgba(255,255,255,0.04)",
              borderColor: "rgba(255,255,255,0.10)",
              color: "rgba(255,255,255,0.65)",
            }}
          >
            Explore Services
            <span style={{ color: "rgba(255,255,255,0.30)" }}>↗</span>
          </Link>
        </motion.div>

        {/* Divider */}
        <motion.div {...fadeUp(0.25)} className="flex items-center gap-4 max-w-sm mx-auto mb-10">
          <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.08)" }} />
          <span className="text-xs tracking-wide" style={{ color: "rgba(255,255,255,0.25)" }}>
            or get occasional updates
          </span>
          <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.08)" }} />
        </motion.div>

        {/* Email capture */}
        <motion.div {...fadeUp(0.3)} className="max-w-md mx-auto">
          {submitted ? (
            <div
              className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-medium"
              style={{
                background: "rgba(74,222,128,0.08)",
                border: "1px solid rgba(74,222,128,0.20)",
                color: "#4ade80",
              }}
            >
              <span>✓</span> You&apos;re on the list. We&apos;ll be in touch.
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="flex gap-3 flex-col sm:flex-row">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your work email address"
                  required
                  autoComplete="email"
                  className="flex-1 px-5 py-3 rounded-full text-sm text-white placeholder-white/30 outline-none focus:ring-1 focus:ring-[var(--gold)]/50 transition"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.10)",
                  }}
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-3 rounded-full text-sm font-semibold text-[var(--navy)] transition-all duration-300 disabled:opacity-50 hover:brightness-110"
                  style={{
                    background: "linear-gradient(135deg, var(--gold) 0%, var(--gold-dark) 100%)",
                  }}
                >
                  {loading ? "…" : "Stay Updated"}
                </button>
              </div>
              {error && (
                <p className="mt-2 text-xs" style={{ color: "#f87171" }}>{error}</p>
              )}
            </form>
          )}
          <p className="mt-3 text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
            Insights on MVPs, AI products, and tech strategy. No spam.
          </p>
        </motion.div>

        {/* Trust reassurance */}
        <motion.div
          {...fadeUp(0.35)}
          className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-10"
        >
          {TRUST_PILLS.map((item) => (
            <span key={item} className="flex items-center gap-1.5 text-xs" style={{ color: "rgba(255,255,255,0.30)" }}>
              <span style={{ color: "#4ade80", fontSize: "0.6rem" }}>✓</span>
              {item}
            </span>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
