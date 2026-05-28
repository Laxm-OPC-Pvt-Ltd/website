"use client";

import { motion } from "framer-motion";

export interface CaseStudy {
  industry: string;
  title: string;
  problem: string;
  approach: string;
  outcomes: string[];
  timeline: string;
  technologies?: string[];
}

interface CaseStudyCardProps {
  study: CaseStudy;
  delay?: number;
}

export default function CaseStudyCard({ study, delay = 0 }: CaseStudyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col p-8 rounded-2xl h-full transition-all duration-500 hover:-translate-y-1"
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
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <span
          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide"
          style={{
            background: "rgba(212,175,55,0.10)",
            border: "1px solid rgba(212,175,55,0.25)",
            color: "var(--gold)",
          }}
        >
          {study.industry}
        </span>
        <span className="text-xs" style={{ color: "rgba(255,255,255,0.30)" }}>
          {study.timeline}
        </span>
      </div>

      <h3 className="text-base font-bold text-white mb-4 leading-snug">{study.title}</h3>

      <div className="mb-3">
        <div className="text-[10px] font-semibold uppercase tracking-widest mb-1.5" style={{ color: "rgba(255,255,255,0.30)" }}>
          Problem
        </div>
        <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
          {study.problem}
        </p>
      </div>

      <div className="mb-4">
        <div className="text-[10px] font-semibold uppercase tracking-widest mb-1.5" style={{ color: "rgba(255,255,255,0.30)" }}>
          Approach
        </div>
        <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
          {study.approach}
        </p>
      </div>

      {/* Outcomes */}
      <div className="mt-auto pt-5 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="text-[10px] font-semibold uppercase tracking-widest mb-3" style={{ color: "rgba(255,255,255,0.30)" }}>
          Outcomes
        </div>
        <ul className="space-y-2">
          {study.outcomes.map((outcome) => (
            <li key={outcome} className="flex items-start gap-2 text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
              <span style={{ color: "#4ade80", fontSize: "0.6rem", marginTop: "0.3rem", flexShrink: 0 }}>✓</span>
              {outcome}
            </li>
          ))}
        </ul>

        {study.technologies && study.technologies.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-4">
            {study.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded text-xs font-medium"
                style={{ background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.40)" }}
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
