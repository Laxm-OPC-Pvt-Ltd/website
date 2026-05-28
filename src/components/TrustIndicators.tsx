"use client";

import { motion } from "framer-motion";

const TRUST_ITEMS = [
  "IP Ownership Transferred",
  "NDA on Day One",
  "No Vendor Lock-in",
  "Transparent Pricing",
  "Weekly Progress Updates",
  "Senior-Led Execution",
  "Fixed-Scope or T&M",
  "Free Discovery Call",
];

const STATS = [
  { value: "8–12", unit: "weeks", label: "Typical MVP timeline" },
  { value: "48h",  unit: "",      label: "Proposal turnaround" },
  { value: "10+",  unit: "years", label: "Technology experience" },
];

export default function TrustIndicators() {
  return (
    <section
      className="py-14 border-y"
      style={{
        background: "rgba(212,175,55,0.025)",
        borderColor: "rgba(212,175,55,0.10)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Trust pills */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {TRUST_ITEMS.map((item, i) => (
            <motion.span
              key={item}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-medium"
              style={{
                background: "rgba(255,255,255,0.03)",
                borderColor: "rgba(255,255,255,0.07)",
                color: "rgba(255,255,255,0.55)",
              }}
            >
              <span style={{ color: "#4ade80", fontSize: "0.6rem" }}>✓</span>
              {item}
            </motion.span>
          ))}
        </motion.div>

        {/* Divider */}
        <div
          className="h-px w-full mb-10"
          style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.06), transparent)" }}
        />

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="text-2xl md:text-3xl font-extrabold text-gradient-gold leading-none mb-1">
                {s.value}
                {s.unit && (
                  <span className="text-sm font-semibold ml-1" style={{ color: "rgba(212,175,55,0.6)" }}>
                    {s.unit}
                  </span>
                )}
              </div>
              <div className="text-xs tracking-wide" style={{ color: "rgba(255,255,255,0.35)" }}>
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
