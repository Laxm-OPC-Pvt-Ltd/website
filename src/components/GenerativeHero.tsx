"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import HeroBackground from "@/components/HeroBackground";
import RotatingText from "@/components/RotatingText";

// ── Data ─────────────────────────────────────────────────────────
const ROTATING_WORDS = ["AI-Powered", "Outcome-Driven", "Enterprise-Ready", "Future-Proof"];

const METRICS = [
  { value: "50+",   label: "Projects Delivered" },
  { value: "100%",  label: "Client Retention" },
  { value: "< 24h", label: "First Response" },
];

const CAPABILITIES = [
  { icon: "◈", label: "AI / ML Development" },
  { icon: "◇", label: "Technology Advisory" },
  { icon: "◆", label: "Strategic Consulting" },
  { icon: "◉", label: "Innovation Programs" },
];

const referralOverrides: Record<string, { headline: string; sub: string; cta: string }> = {
  linkedin: {
    headline: "Let's Build Something Remarkable",
    sub: "Enterprise AI/ML solutions for leaders ready to transform their industry.",
    cta: "Schedule a Consultation",
  },
  twitter: {
    headline: "AI Innovation That Drives Results",
    sub: "From idea to production-ready AI — fast, precise, and measurable.",
    cta: "Explore Solutions",
  },
};

// ── Component ─────────────────────────────────────────────────────
export function GenerativeHero() {
  const [referral, setReferral] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setReferral(params.get("ref") || params.get("utm_source") || "");
  }, []);

  const override = referralOverrides[referral];

  const handleCTA = () => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "conversion", {
        event_category: "hero_cta",
        event_label: referral || "organic",
        value: 1,
      });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <HeroBackground />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-12 pb-32 flex flex-col items-center text-center">

        {/* ── Status pill ─────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border backdrop-blur-sm mb-10"
          style={{
            background: "rgba(212,175,55,0.06)",
            borderColor: "rgba(212,175,55,0.25)",
          }}
        >
          <span className="relative flex h-2 w-2 flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
          </span>
          <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--gold)]">
            Accepting New Projects · 2026
          </span>
        </motion.div>

        {/* ── Headline ─────────────────────────────────────────── */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl sm:text-6xl md:text-[5.25rem] lg:text-[6rem] font-extrabold tracking-tight text-white leading-[1.05] mb-5"
        >
          {override ? (
            <span className="text-gradient-gold">{override.headline}</span>
          ) : (
            <>
              Transform Your Business
              <span className="block mt-2">
                Into a{" "}
                <RotatingText words={ROTATING_WORDS} interval={2800} />
                <span className="text-white"> Reality</span>
              </span>
            </>
          )}
        </motion.h1>

        {/* ── Gold rule ────────────────────────────────────────── */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="w-20 h-px mb-6"
          style={{ background: "linear-gradient(to right, transparent, var(--gold), transparent)" }}
        />

        {/* ── Subtitle ─────────────────────────────────────────── */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.55 }}
          className="text-lg md:text-xl max-w-2xl leading-relaxed mb-10"
          style={{ color: "rgba(255,255,255,0.55)" }}
        >
          {override?.sub ??
            "Laxm OPC Private Limited partners with forward-thinking companies to design, build, and scale AI-driven products — with enterprise-grade quality and startup agility."}
        </motion.p>

        {/* ── CTA Buttons ──────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 items-center mb-16"
        >
          <a
            href="#configurator"
            onClick={handleCTA}
            className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full text-[var(--navy)] text-sm font-bold tracking-wide hover:scale-105 active:scale-100 transition-all duration-300 overflow-hidden"
            style={{
              background: "linear-gradient(135deg, var(--gold) 0%, var(--gold-dark) 100%)",
              boxShadow: "0 0 30px rgba(212,175,55,0.25)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 55px rgba(212,175,55,0.45)")}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 0 30px rgba(212,175,55,0.25)")}
          >
            <span className="relative z-10">{override?.cta ?? "Configure Your Project"}</span>
            <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">→</span>
            <span className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/25 to-transparent group-hover:translate-x-[100%] transition-transform duration-700 rounded-full" />
          </a>

          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border text-sm font-semibold hover:text-white transition-all duration-300 backdrop-blur-sm"
            style={{
              background: "rgba(255,255,255,0.04)",
              borderColor: "rgba(255,255,255,0.10)",
              color: "rgba(255,255,255,0.70)",
            }}
          >
            Learn About Laxm
            <span className="text-xs" style={{ color: "rgba(255,255,255,0.30)" }}>↗</span>
          </Link>
        </motion.div>

        {/* ── Capability pills ──────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="flex flex-wrap justify-center gap-2.5 mb-20"
        >
          {CAPABILITIES.map((cap, i) => (
            <motion.span
              key={cap.label}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + i * 0.07 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-medium tracking-wide transition-all duration-300 cursor-default select-none"
              style={{
                background: "rgba(255,255,255,0.04)",
                borderColor: "rgba(255,255,255,0.08)",
                color: "rgba(255,255,255,0.45)",
              }}
            >
              <span className="text-[var(--gold)]">{cap.icon}</span>
              {cap.label}
            </motion.span>
          ))}
        </motion.div>

        {/* ── Metrics strip ────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 1.05 }}
          className="w-full max-w-lg"
        >
          <div
            className="grid grid-cols-3 rounded-2xl overflow-hidden backdrop-blur-sm"
            style={{
              border: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(255,255,255,0.02)",
              borderRadius: "1rem",
              overflow: "hidden",
            }}
          >
            {METRICS.map((m, i) => (
              <div
                key={m.label}
                className="flex flex-col items-center py-5 px-4 transition-colors duration-300 hover:bg-white/5"
                style={{
                  borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.08)" : undefined,
                }}
              >
                <span className="text-2xl md:text-3xl font-extrabold text-gradient-gold leading-none">
                  {m.value}
                </span>
                <span
                  className="text-xs mt-1.5 tracking-wide uppercase text-center"
                  style={{ color: "rgba(255,255,255,0.35)" }}
                >
                  {m.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>

      {/* ── Scroll indicator ─────────────────────────────────────── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
        style={{ color: "rgba(255,255,255,0.25)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
      >
        <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          className="w-px h-8"
          style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.25), transparent)" }}
          animate={{ scaleY: [1, 0.3, 1], transformOrigin: "top" }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
