"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import CaseStudyCard, { type CaseStudy } from "@/components/CaseStudyCard";

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  };
}

const CASE_STUDIES: CaseStudy[] = [
  {
    industry: "Healthcare",
    title: "Patient engagement portal for a multi-specialty clinic",
    problem:
      "A mid-size clinic managing 500+ monthly appointments through phone calls and spreadsheets was losing 25–30% of bookings to friction and no-shows.",
    approach:
      "Built a patient-facing web portal with online booking, automated SMS/email reminders, and a lightweight admin dashboard for the clinic team.",
    outcomes: [
      "38% reduction in appointment no-shows",
      "Clinic staff freed from 3+ hours of manual coordination daily",
      "Delivered in 10 weeks from first discovery call",
    ],
    timeline: "10 weeks",
    technologies: ["Next.js", "PostgreSQL", "Twilio", "Node.js"],
  },
  {
    industry: "Operations",
    title: "Workflow automation for an import/export trading firm",
    problem:
      "A 15-person operations team spent over 60% of their day on data entry — manually reconciling invoices, purchase orders, and logistics updates across three disconnected tools.",
    approach:
      "Mapped and automated the end-to-end document reconciliation workflow, then built a unified dashboard integrating their ERP, logistics portal, and accounting software.",
    outcomes: [
      "52% reduction in manual data entry hours per week",
      "Real-time visibility across 200+ active shipments",
      "Zero integration downtime in 6 months post-launch",
    ],
    timeline: "7 weeks",
    technologies: ["Python", "REST APIs", "PostgreSQL", "React"],
  },
  {
    industry: "Financial Services",
    title: "Lead qualification AI for a wealth advisory firm",
    problem:
      "The sales team manually reviewed 200+ inbound leads per month, spending 4–5 hours daily on qualification calls that converted at under 12%.",
    approach:
      "Built an AI scoring model analyzing lead data against 18 qualification criteria, integrated directly into their CRM with an automated outreach workflow.",
    outcomes: [
      "Qualification time reduced from 5h to under 45 min/day",
      "Lead-to-meeting conversion improved by 2.8×",
      "Sales team refocused on high-value relationship building",
    ],
    timeline: "8 weeks",
    technologies: ["Python", "OpenAI API", "HubSpot API", "TypeScript"],
  },
];

export default function CaseStudyHighlights() {
  return (
    <section className="py-28 md:py-36 relative overflow-hidden" style={{ background: "var(--navy-light)" }}>
      {/* Separators */}
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(212,175,55,0.15), transparent)" }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(212,175,55,0.04) 0%, transparent 60%)" }}
      />

      <div className="relative max-w-6xl mx-auto px-6">

        <motion.div {...fadeUp(0)} className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-6"
            style={{ background: "rgba(212,175,55,0.07)", borderColor: "rgba(212,175,55,0.22)" }}
          >
            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--gold)]">
              Project Highlights
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Real problems.{" "}
            <span className="text-gradient-gold">Real outcomes.</span>
          </h2>
          <p className="max-w-xl mx-auto text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.50)" }}>
            Every engagement starts with understanding the actual problem. Then we build the most
            practical solution to solve it.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {CASE_STUDIES.map((study, i) => (
            <CaseStudyCard key={study.title} study={study} delay={i * 0.1} />
          ))}
        </div>

        <motion.div {...fadeUp(0.4)} className="text-center mt-12">
          <Link
            href="/contact?type=strategy"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--gold)] hover:gap-3 transition-all duration-200"
          >
            Discuss your project <span>→</span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
