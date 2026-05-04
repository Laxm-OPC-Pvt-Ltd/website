import type { Metadata } from "next";
import { canonicalUrl } from "@/lib/metadata";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "AI/ML Products & Accelerators | Laxm OPC Private Limited",
  description:
    "Explore Laxm's AI-powered products: SiteSync-AI, Insight AI, Ops Assist, and Vision ML. Enterprise-grade accelerators that compress your time-to-value.",
  keywords: ["Products", "AI", "ML", "SiteSync-AI", "Innovation", "Accelerators", "Laxm"],
  alternates: { canonical: canonicalUrl("/products") },
  openGraph: {
    title: "AI/ML Products - Laxm OPC Private Limited",
    description: "Enterprise-grade AI/ML accelerators from Laxm.",
    url: canonicalUrl("/products"),
    siteName: "Laxm",
    type: "website",
    images: [{ url: "/laxm_logo.png", width: 1200, height: 630, alt: "Laxm Products" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI/ML Products - Laxm",
    images: ["/laxm_logo.png"],
  },
};

const products = [
  {
    tag: "Live",
    title: "SiteSync-AI",
    description:
      "Revolutionary AI-powered website synchronization and intelligence platform that transforms your web presence into actionable insights and automated opportunities.",
    features: [
      "Intelligent Website Analysis",
      "Automated Gap Detection",
      "AI-Driven Opportunity Mapping",
      "Real-time Performance Monitoring",
      "Competitive Intelligence",
      "Strategic Growth Recommendations",
    ],
    link: "https://sitesyncai.thelaxm.com",
    cta: "Explore Product",
    iconPath:
      "M13 10V3L4 14h7v7l9-11h-7z M3 3l18 18",
  },
  {
    tag: "Beta",
    title: "Insight AI",
    description:
      "Advanced knowledge discovery engine that transforms unstructured data into actionable strategic insights using state-of-the-art NLP.",
    features: ["Document Summarization", "Sentiment Analysis", "Trend Forecasting", "Entity Extraction"],
    link: null,
    cta: "Request Demo",
    iconPath:
      "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  },
  {
    tag: "Coming Soon",
    title: "Ops Assist",
    description:
      "Intelligent automation suite for DevOps teams, reducing manual toil and predicting infrastructure bottlenecks before they occur.",
    features: ["Auto-Remediation", "Log Anomaly Detection", "Capacity Planning", "SLA Monitoring"],
    link: null,
    cta: "Join Waitlist",
    iconPath:
      "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    tag: "Coming Soon",
    title: "Vision ML",
    description:
      "Pre-trained computer vision models and templates designed for rapid prototyping in retail, security, and manufacturing.",
    features: ["Object Detection", "Facial Recognition", "Quality Control", "Scene Classification"],
    link: null,
    cta: "Join Waitlist",
    iconPath:
      "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
  },
];

const tagColors: Record<string, string> = {
  Live: "bg-emerald-500/15 text-emerald-400 border border-emerald-500/25",
  Beta: "bg-blue-500/15 text-blue-400 border border-blue-500/25",
  "Coming Soon": "bg-white/8 text-white/40 border border-white/12",
};

export default function Products() {
  return (
    <main className="min-h-screen bg-[var(--navy)]">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden pt-28 pb-20 hero-gradient">
        <div className="absolute inset-0 grid-overlay opacity-20 pointer-events-none" />
        <div className="absolute -top-40 right-1/4 w-[600px] h-[600px] bg-[var(--gold)]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full border border-[var(--gold)]/30 bg-[var(--gold)]/10 text-[var(--gold)] text-sm font-medium tracking-wide mb-6">
            Product Suite
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight animate-fade-in-up">
            Our <span className="text-gradient-gold">Products</span>
          </h1>
          <p className="text-base text-white/60 max-w-2xl mx-auto leading-relaxed">
            AI/ML accelerators that compress your time-to-value. From intelligence platforms
            to operational automation — built to solve real problems.
          </p>
        </div>
      </section>

      {/* ── Products Grid ── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {products.map((product, index) => (
              <div
                key={index}
                className="group flex flex-col bg-white/[0.03] border border-white/[0.08] rounded-2xl p-8 hover:border-[var(--gold)]/30 hover:bg-white/[0.06] transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon + tag row */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[var(--gold)]/10 flex items-center justify-center group-hover:bg-[var(--gold)] transition-colors duration-300">
                    <svg
                      className="w-6 h-6 text-[var(--gold)] group-hover:text-[var(--navy)] transition-colors"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={product.iconPath} />
                    </svg>
                  </div>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${tagColors[product.tag]}`}>
                    {product.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[var(--gold)] transition-colors">
                  {product.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed mb-6">{product.description}</p>

                <ul className="grid grid-cols-2 gap-x-4 gap-y-2 mb-8 flex-1">
                  {product.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-white/50">
                      <span className="w-1 h-1 rounded-full bg-[var(--gold)] flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-3 mt-auto">
                  {product.link ? (
                    <CTAButton
                      href={product.link}
                      variant="primary"
                      className="flex-1 justify-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {product.cta}
                    </CTAButton>
                  ) : (
                    <CTAButton href="/contact" variant="primary" className="flex-1 justify-center">
                      {product.cta}
                    </CTAButton>
                  )}
                  <CTAButton
                    href="/contact"
                    variant="outline"
                    className="flex-1 justify-center text-white border-white/20 hover:bg-white/10"
                  >
                    Learn More
                  </CTAButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to <span className="text-gradient-gold">Build the Future?</span>
          </h2>
          <p className="text-white/45 mb-8 text-sm max-w-md mx-auto leading-relaxed">
            Let&apos;s discuss how our products can accelerate your roadmap and deliver measurable ROI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/contact" variant="primary">Request a Demo</CTAButton>
            <CTAButton href="/services" variant="outline" className="text-white border-white/25 hover:bg-white/10">
              View Services
            </CTAButton>
          </div>
        </div>
      </section>

    </main>
  );
}