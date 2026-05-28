"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  };
}

const FAQS = [
  {
    q: "What types of clients do you typically work with?",
    a: "We work primarily with two groups: founders and idea-stage builders who need a technical partner to plan and build their first product, and established SMEs (10–200 employees) who need to modernize systems, automate workflows, or adopt AI. We are not a large-enterprise consulting firm — we are selective and hands-on.",
  },
  {
    q: "How long does a typical MVP development project take?",
    a: "Most MVPs are scoped for 8–12 weeks, depending on complexity. We focus on building the minimum version that validates your key business assumption, not a feature-complete product. This means faster feedback loops and lower risk.",
  },
  {
    q: "What does a Fractional CTO engagement look like?",
    a: "Fractional CTO engagements are structured as a monthly retainer. You get access to senior technical leadership for architecture decisions, team hiring guidance, vendor evaluation, product roadmap planning, and technical due diligence — without the cost or commitment of a full-time hire.",
  },
  {
    q: "Do you work with very early-stage ideas or only more developed businesses?",
    a: "Both. We work with idea-stage founders who need a scoped technical conversation before committing capital, and with businesses that already have systems but need them improved. A 30-minute discovery call is usually enough to figure out where you are and what you need.",
  },
  {
    q: "Which industries do you specialize in?",
    a: "Our deepest experience is in healthcare technology, financial services, and operations-heavy SMEs. Our methodology applies broadly — if your business has processes to automate, systems to build, or ideas to prototype, we can help.",
  },
  {
    q: "What is your typical engagement model and pricing?",
    a: "We work on three models: fixed-scope projects (most common for MVPs), time-and-materials (for ongoing or evolving work), and monthly retainers (for advisory and Fractional CTO). Investment ranges are shared clearly in our proposal — no surprises.",
  },
  {
    q: "Do you sign NDAs and transfer IP ownership to clients?",
    a: "Yes to both. We sign a mutual NDA at the start of every engagement. All IP produced during the project is transferred to you at completion. You own everything we build — no strings attached.",
  },
  {
    q: "How is Laxm different from a typical software development agency?",
    a: "Most agencies execute specifications. We help you figure out the right specification to write in the first place. We bring strategic thinking, not just development capacity. You work directly with Ram — not an account manager with a team you will never meet.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-28 md:py-36 relative overflow-hidden" style={{ background: "var(--navy)" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Top separator */}
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(212,175,55,0.25), transparent)" }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(212,175,55,0.05) 0%, transparent 60%)" }}
      />

      <div className="relative max-w-3xl mx-auto px-6">

        <motion.div {...fadeUp(0)} className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-6"
            style={{ background: "rgba(212,175,55,0.07)", borderColor: "rgba(212,175,55,0.22)" }}
          >
            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--gold)]">
              Common Questions
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Frequently asked{" "}
            <span className="text-gradient-gold">questions</span>
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.50)" }}>
            If your question isn&apos;t here,{" "}
            <a href="/contact" className="text-[var(--gold)] hover:underline">just ask directly</a>.
          </p>
        </motion.div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <motion.div
              key={faq.q}
              {...fadeUp(i * 0.04)}
              className="rounded-xl overflow-hidden"
              style={{ border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <button
                className="w-full flex items-center justify-between gap-4 p-6 text-left transition-colors duration-200"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
                style={{
                  background: openIndex === i ? "rgba(212,175,55,0.05)" : "rgba(255,255,255,0.02)",
                }}
              >
                <span className="text-sm font-semibold text-white leading-snug">{faq.q}</span>
                <span
                  className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs transition-transform duration-300"
                  style={{
                    background: "rgba(212,175,55,0.10)",
                    border: "1px solid rgba(212,175,55,0.25)",
                    color: "var(--gold)",
                    transform: openIndex === i ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                >
                  +
                </span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-0">
                      <div className="h-px w-full mb-4" style={{ background: "rgba(255,255,255,0.06)" }} />
                      <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
