import type { Metadata } from "next";
import { canonicalUrl } from "@/lib/metadata";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "AI/ML Services | Advisory, IT Consulting & Innovation | Laxm",
  description:
    "Advisory, IT consulting, AI/ML innovation, and custom solutions tailored to your goals. Laxm OPC Private Limited delivers enterprise-grade technology outcomes.",
  keywords: [
    "Services",
    "Advisory",
    "IT Consulting",
    "AI ML Innovation",
    "Custom Solutions",
    "Laxm",
    "DevOps",
    "Cloud Migration",
  ],
  alternates: { canonical: canonicalUrl("/services") },
  openGraph: {
    title: "Services - Laxm OPC Private Limited",
    description: "Advisory, IT consulting, innovation, and custom solutions tailored to your goals.",
    url: canonicalUrl("/services"),
    siteName: "Laxm",
    type: "website",
    images: [{ url: "/laxm_logo.png", width: 1200, height: 630, alt: "Laxm Services" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services - Laxm",
    images: ["/laxm_logo.png"],
  },
};

const services = [
  {
    number: "01",
    title: "Advisory",
    description:
      "Strategy, architecture, roadmaps, and transformation leadership — giving you the clarity to make the right calls at every stage.",
    features: ["Digital Strategy", "Enterprise Architecture", "Tech Roadmap", "CTO Advisory"],
    iconPath:
      "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z",
  },
  {
    number: "02",
    title: "IT Consulting",
    description:
      "Cloud, DevOps, platform engineering, and modernization — making your infrastructure a competitive advantage, not a liability.",
    features: ["Cloud Migration", "DevOps & SRE", "Platform Engineering", "Legacy Modernization"],
    iconPath:
      "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
  },
  {
    number: "03",
    title: "Innovation",
    description:
      "AI/ML product discovery, prototyping, and delivery — turning research into production-ready systems that generate real ROI.",
    features: ["AI/ML Solutions", "GenAI Integration", "Rapid Prototyping", "Data Engineering"],
    iconPath: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    number: "04",
    title: "Custom Solutions",
    description:
      "Bespoke applications, integrations, and end-to-end systems — engineered precisely to your requirements, not off-the-shelf compromises.",
    features: ["Full Stack Development", "API Integration", "Mobile Apps", "Microservices"],
    iconPath: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  },
];

const process = [
  { step: "01", label: "Discovery", desc: "Align on goals, constraints, and success metrics." },
  { step: "02", label: "Roadmap", desc: "Deliver a phased plan with clear milestones and ownership." },
  { step: "03", label: "Build", desc: "Execute with senior-led engineering and regular check-ins." },
  { step: "04", label: "Launch", desc: "Deploy, measure, and continuously improve." },
];

export default function Services() {
  return (
    <div className="flex flex-col bg-[var(--navy)]">

      {/* ── Hero ── */}
      <section className="hero-gradient text-white relative overflow-hidden pt-28 pb-24 min-h-[52vh] flex items-center">
        <div className="absolute inset-0 grid-overlay opacity-20 pointer-events-none" />
        <div className="absolute right-0 top-1/3 w-[500px] h-[500px] bg-[var(--gold)]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-5xl px-6 relative z-10 w-full text-center">
          <span className="inline-block px-4 py-1.5 rounded-full border border-[var(--gold)]/30 bg-[var(--gold)]/10 text-[var(--gold)] text-sm font-medium tracking-wide mb-6 animate-fade-in-up">
            What We Do
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight animate-fade-in-up">
            Our <span className="text-gradient-gold">Services</span>
          </h1>
          <p className="text-base text-white/60 max-w-2xl mx-auto leading-relaxed animate-fade-in-up">
            We combine strategic insight with technical excellence to deliver solutions that drive
            real business value — not just deliverables.
          </p>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="py-20 px-6 relative">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-7">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white/[0.03] border border-white/[0.08] rounded-2xl p-10 hover:border-[var(--gold)]/30 hover:bg-white/[0.06] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-7">
                  <div className="w-12 h-12 rounded-xl bg-[var(--gold)]/10 flex items-center justify-center group-hover:bg-[var(--gold)] transition-colors duration-300">
                    <svg
                      className="w-6 h-6 text-[var(--gold)] group-hover:text-[var(--navy)] transition-colors"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.iconPath} />
                    </svg>
                  </div>
                  <span className="text-4xl font-bold text-white/[0.06] group-hover:text-[var(--gold)]/15 transition-colors select-none tabular-nums">
                    {service.number}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[var(--gold)] transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed mb-7">{service.description}</p>

                <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
                  {service.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs font-medium text-white/50">
                      <span className="w-1 h-1 rounded-full bg-[var(--gold)] flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How We Work ── */}
      <section className="py-20 px-6 border-t border-white/[0.06]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How We <span className="text-gradient-gold">Work</span>
            </h2>
            <p className="text-white/45 text-sm max-w-xl mx-auto">
              A clear, repeatable process that keeps you informed at every step.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <div key={i} className="relative text-center group">
                {i < process.length - 1 && (
                  <div className="hidden md:block absolute top-7 left-[calc(50%+28px)] right-0 h-px bg-gradient-to-r from-[var(--gold)]/30 to-transparent" />
                )}
                <div className="w-14 h-14 mx-auto mb-4 rounded-full border border-[var(--gold)]/30 bg-[var(--gold)]/8 flex items-center justify-center text-sm font-bold text-[var(--gold)] group-hover:bg-[var(--gold)] group-hover:text-[var(--navy)] transition-all duration-300">
                  {p.step}
                </div>
                <h4 className="text-sm font-bold text-white mb-2">{p.label}</h4>
                <p className="text-white/40 text-xs leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6 border-t border-white/[0.06]">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to elevate <span className="text-gradient-gold">your business?</span>
          </h2>
          <p className="text-white/45 text-sm mb-8 max-w-md mx-auto leading-relaxed">
            Let&apos;s start with a 30-minute strategy call — no obligations, no sales pitch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/contact" variant="primary">Get in Touch</CTAButton>
            <CTAButton href="/products" variant="outline" className="text-white border-white/25 hover:bg-white/10">
              View Products
            </CTAButton>
          </div>
        </div>
      </section>

    </div>
  );
}