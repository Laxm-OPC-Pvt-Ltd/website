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

const SERVICES = [
  {
    icon: "◈",
    title: "MVP Development",
    outcome: "Go from idea to a working product in 8–12 weeks",
    slug: "mvp-development",
  },
  {
    icon: "◆",
    title: "AI Product Development",
    outcome: "Build AI tools that solve a real, specific business problem",
    slug: "ai-product-development",
  },
  {
    icon: "◇",
    title: "Fractional CTO",
    outcome: "Senior technical leadership without the full-time hire",
    slug: "fractional-cto",
  },
  {
    icon: "◉",
    title: "Healthcare Technology",
    outcome: "Software built for the unique constraints of healthcare",
    slug: "healthcare-technology",
  },
  {
    icon: "⬡",
    title: "Workflow Automation",
    outcome: "Eliminate manual work so your team focuses on what matters",
    slug: "workflow-automation",
  },
  {
    icon: "◎",
    title: "Technical Advisory",
    outcome: "Expert guidance before you commit to building the wrong thing",
    slug: "technical-advisory",
  },
  {
    icon: "▣",
    title: "Product Modernization",
    outcome: "Upgrade legacy systems without disrupting what works",
    slug: "product-modernization",
  },
  {
    icon: "⬢",
    title: "Architecture Consulting",
    outcome: "Design systems that scale cleanly as your business grows",
    slug: "architecture-consulting",
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-28 md:py-36 relative overflow-hidden" style={{ background: "var(--navy-light)" }}>
      {/* Top separator */}
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(212,175,55,0.20), transparent)" }}
      />
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 40% at 50% 0%, rgba(212,175,55,0.05) 0%, transparent 60%)" }}
      />

      <div className="relative max-w-6xl mx-auto px-6">

        <motion.div {...fadeUp(0)} className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-6"
            style={{ background: "rgba(212,175,55,0.07)", borderColor: "rgba(212,175,55,0.22)" }}
          >
            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--gold)]">
              What We Do
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Services built for{" "}
            <span className="text-gradient-gold">real business outcomes</span>
          </h2>
          <p className="max-w-xl mx-auto text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.50)" }}>
            Not theoretical frameworks or generic deliverables. Work that produces measurable
            outcomes for your specific business.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {SERVICES.map((svc, i) => (
            <motion.div key={svc.title} {...fadeUp(i * 0.05)}>
              <Link
                href={`/services#${svc.slug}`}
                className="group flex flex-col p-6 rounded-xl h-full transition-all duration-300 hover:-translate-y-1"
                style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.06)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,175,55,0.28)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.025)";
                }}
              >
                <span className="text-[var(--gold)] text-xl block mb-4">{svc.icon}</span>
                <h3 className="text-sm font-bold text-white mb-2 group-hover:text-[var(--gold)] transition-colors duration-200">
                  {svc.title}
                </h3>
                <p className="text-xs leading-relaxed flex-1" style={{ color: "rgba(255,255,255,0.40)" }}>
                  {svc.outcome}
                </p>
                <span className="inline-flex items-center gap-1 text-xs text-[var(--gold)] mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  Learn more <span>→</span>
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeUp(0.4)} className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border text-sm font-semibold transition-all duration-300 hover:text-white"
            style={{
              background: "rgba(255,255,255,0.04)",
              borderColor: "rgba(255,255,255,0.10)",
              color: "rgba(255,255,255,0.70)",
            }}
          >
            View Full Services Overview
            <span className="text-xs" style={{ color: "rgba(255,255,255,0.30)" }}>↗</span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
