import type { Metadata } from "next";
import Link from "next/link";
import { canonicalUrl, BASE_URL } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Services — MVP Development, Fractional CTO & Technology Advisory | Laxm",
  description:
    "Laxm offers MVP development, AI product development, Fractional CTO services, healthcare technology, workflow automation, technical advisory, product modernization, and architecture consulting for founders and SMEs.",
  keywords: [
    "MVP development",
    "fractional CTO",
    "AI product development",
    "healthcare technology",
    "workflow automation",
    "technical advisory",
    "product modernization",
    "architecture consulting",
    "Laxm",
    "technology advisory Hyderabad",
  ],
  alternates: { canonical: canonicalUrl("/services") },
  openGraph: {
    title: "Services — MVP Development, Fractional CTO & Technology Advisory | Laxm",
    description:
      "Eight business-outcome focused services for founders and SMEs. From MVP development to workflow automation and healthcare technology.",
    url: canonicalUrl("/services"),
    siteName: "Laxm",
    type: "website",
    images: [{ url: "/laxm_logo.png", width: 1200, height: 630, alt: "Laxm Services" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | Laxm",
    images: ["/laxm_logo.png"],
  },
};

const SERVICES = [
  {
    id: "mvp-development",
    number: "01",
    title: "MVP Development",
    tagline: "Go from idea to working product in 8–12 weeks.",
    description:
      "You have a business idea, a hypothesis, or a product vision. We help you scope it precisely, build the right version first, and ship something real that lets you test market demand before you over-invest.",
    painPoints: [
      "Not sure what to build first",
      "Worried about wasting money on the wrong features",
      "No technical co-founder to guide the build",
    ],
    outcomes: [
      "A working product you can demo to customers or investors",
      "Clear architecture decisions documented for scale",
      "Validated assumptions before you hire a full team",
    ],
    ideal: "Founders, HNWIs, and idea-stage businesses",
    engagement: "Fixed-scope project · 8–12 weeks",
    iconPath: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    id: "ai-product-development",
    number: "02",
    title: "AI Product Development",
    tagline: "Build AI tools that solve a real, specific business problem.",
    description:
      "Not all AI is useful. We help you identify where AI creates genuine leverage in your business, then build it — from custom models to LLM integrations, automation workflows, and AI-powered products customers actually use.",
    painPoints: [
      "You want AI but don't know where it actually helps",
      "Generic AI tools aren't meeting your specific needs",
      "You need AI that integrates with your existing systems",
    ],
    outcomes: [
      "An AI system that solves a specific, measurable business problem",
      "Integration with your existing tools and data",
      "Clear documentation and your team trained to use it",
    ],
    ideal: "Product builders, operators, and businesses with data-rich workflows",
    engagement: "Fixed-scope or T&M · 6–16 weeks",
    iconPath: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    id: "fractional-cto",
    number: "03",
    title: "Fractional CTO",
    tagline: "Senior technical leadership without the full-time hire.",
    description:
      "You need a CTO's judgment — for architecture decisions, hiring guidance, vendor evaluation, technical due diligence, or product roadmap planning — but you're not at the stage where a full-time hire makes sense.",
    painPoints: [
      "About to make a major technology decision and not confident",
      "Need someone to evaluate a vendor or agency proposal",
      "Your engineering team needs senior mentoring and direction",
    ],
    outcomes: [
      "Strategic clarity on your technology direction",
      "Better hiring and vendor decisions",
      "Architectural risks identified and mitigated early",
    ],
    ideal: "Seed to Series A companies, SMEs without a technical leader",
    engagement: "Monthly retainer · Ongoing",
    iconPath: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z",
  },
  {
    id: "healthcare-technology",
    number: "04",
    title: "Healthcare Technology",
    tagline: "Software built for the unique constraints of healthcare.",
    description:
      "Healthcare has different rules: patient privacy, clinical workflows, regulatory requirements, and the need for reliability in high-stakes environments. We understand these constraints and build systems that work within them.",
    painPoints: [
      "Generic agencies don't understand clinical workflows",
      "Need privacy-aware architecture from the ground up",
      "Clinical team adoption is always a challenge",
    ],
    outcomes: [
      "Systems designed around clinical workflows, not around them",
      "Privacy-aware data architecture built in from day one",
      "Higher adoption due to focused, user-tested UX",
    ],
    ideal: "Clinics, health-tech startups, hospitals, and digital health companies",
    engagement: "Fixed-scope or T&M · timeline varies",
    iconPath: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
  {
    id: "workflow-automation",
    number: "05",
    title: "Workflow Automation",
    tagline: "Eliminate manual work so your team can focus on what matters.",
    description:
      "If your team spends hours on repetitive tasks — data entry, document processing, reconciliations — there's a measurable ROI waiting in automation. We map, scope, and build the automation that delivers the most value first.",
    painPoints: [
      "Team drowning in manual data entry and reconciliation",
      "Processes running across disconnected tools",
      "You know something should be automated but don't know where to start",
    ],
    outcomes: [
      "Measurable reduction in manual hours per week",
      "Integrated systems with real-time data flow",
      "Demonstrable ROI within the first 90 days",
    ],
    ideal: "Operations-heavy SMEs, trading firms, clinics, and logistics companies",
    engagement: "Fixed-scope · 4–10 weeks",
    iconPath: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
  },
  {
    id: "technical-advisory",
    number: "06",
    title: "Technical Advisory",
    tagline: "Expert guidance before you commit to building the wrong thing.",
    description:
      "Sometimes you don't need a full engagement — you need someone with deep technical experience to review your plan, architecture, vendor choice, or team approach and give you an honest, written assessment.",
    painPoints: [
      "About to sign a contract with a vendor or agency",
      "Not sure if your team's technical approach is sound",
      "Need a second opinion before a major investment",
    ],
    outcomes: [
      "Confidence in your technical decisions",
      "Risks and red flags identified before they become expensive",
      "A clear written assessment you can act on immediately",
    ],
    ideal: "Founders, CEOs, and operators making technology decisions",
    engagement: "Hourly or fixed advisory packages",
    iconPath: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    id: "product-modernization",
    number: "07",
    title: "Product Modernization",
    tagline: "Upgrade legacy systems without disrupting what works.",
    description:
      "Aging software accumulates technical debt until it becomes a liability. We assess what you have, prioritize what needs to change, and execute modernization incrementally — so your business keeps running while we improve the foundation.",
    painPoints: [
      "Legacy software is slow, unreliable, or impossible to extend",
      "Team spends most of its time maintaining old code",
      "Afraid to touch the system in case something breaks",
    ],
    outcomes: [
      "A stable, maintainable system your team can move fast with",
      "Reduced maintenance burden and operational risk",
      "A clear migration path that avoids a big-bang rewrite",
    ],
    ideal: "SMEs and businesses with aging internal systems",
    engagement: "Fixed-scope or T&M · 8–24 weeks",
    iconPath: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
  },
  {
    id: "architecture-consulting",
    number: "08",
    title: "Architecture Consulting",
    tagline: "Design systems that scale cleanly as your business grows.",
    description:
      "Architectural decisions made early have compounding effects — good ones enable speed and scale, bad ones create years of technical debt. We work with your team to design systems right-sized for today and built to grow.",
    painPoints: [
      "Starting a new platform and want to get the architecture right",
      "Current architecture is creating performance or reliability issues",
      "Engineering team lacks senior architectural guidance",
    ],
    outcomes: [
      "An architecture that supports your business model, not fights it",
      "Clear documentation your team can build from confidently",
      "Reduced rework and technical debt going forward",
    ],
    ideal: "Engineering teams, CTOs, and product companies",
    engagement: "Fixed-scope or advisory retainer",
    iconPath: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${BASE_URL}/services#services`,
  name: "Laxm Services",
  url: `${BASE_URL}/services`,
  numberOfItems: SERVICES.length,
  itemListElement: SERVICES.map((svc, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: svc.title,
    description: svc.description,
    url: `${BASE_URL}/services#${svc.id}`,
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Services", item: `${BASE_URL}/services` },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="flex flex-col bg-[var(--navy)]">

        {/* ── Hero ───────────────────────────────────────────────── */}
        <section className="hero-gradient text-white relative overflow-hidden pt-28 pb-24 min-h-[52vh] flex items-center">
          <div className="absolute inset-0 grid-overlay opacity-20 pointer-events-none" />
          <div className="absolute right-0 top-1/3 w-[500px] h-[500px] bg-[var(--gold)]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="mx-auto max-w-5xl px-6 relative z-10 w-full text-center">
            <span className="inline-block px-4 py-1.5 rounded-full border border-[var(--gold)]/30 bg-[var(--gold)]/10 text-[var(--gold)] text-sm font-medium tracking-wide mb-6">
              What We Do
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
              Services built for{" "}
              <span className="text-gradient-gold">real business outcomes</span>
            </h1>
            <p className="text-base text-white/60 max-w-2xl mx-auto leading-relaxed">
              Eight focused service lines for founders and SMEs — each designed around a concrete
              business result, not around a technology stack.
            </p>

            {/* Quick nav */}
            <div className="flex flex-wrap justify-center gap-2 mt-10">
              {SERVICES.map((svc) => (
                <a
                  key={svc.id}
                  href={`#${svc.id}`}
                  className="px-3 py-1.5 rounded-full text-xs font-medium border border-white/[0.12] text-white/60 hover:border-[var(--gold)]/40 hover:text-[var(--gold)] transition-all duration-200"
                >
                  {svc.number}. {svc.title}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── Service Sections ───────────────────────────────────── */}
        <section className="py-8 px-6">
          <div className="mx-auto max-w-6xl space-y-6">
            {SERVICES.map((svc, index) => (
              <div
                key={svc.id}
                id={svc.id}
                className="scroll-mt-24 grid lg:grid-cols-[1fr_320px] gap-0 rounded-2xl border border-white/[0.08] bg-white/[0.03] overflow-hidden hover:border-[var(--gold)]/20 transition-colors duration-300"
              >
                {/* Left — main content */}
                <div className="p-8 md:p-10 border-r border-white/[0.06]">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-11 h-11 rounded-xl bg-[var(--gold)]/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[var(--gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={svc.iconPath} />
                      </svg>
                    </div>
                    <span className="text-3xl font-bold text-white/[0.07] tabular-nums select-none">{svc.number}</span>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">{svc.title}</h2>
                  <p className="text-[var(--gold)] text-sm font-medium italic mb-4">{svc.tagline}</p>
                  <p className="text-white/55 text-sm leading-relaxed mb-8 max-w-2xl">{svc.description}</p>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-xs font-bold text-white/30 uppercase tracking-widest mb-3">Common Pain Points</h4>
                      <ul className="space-y-2">
                        {svc.painPoints.map((p, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-sm text-white/55">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400/70 flex-shrink-0" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white/30 uppercase tracking-widest mb-3">What You Get</h4>
                      <ul className="space-y-2">
                        {svc.outcomes.map((o, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-sm text-white/55">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400/70 flex-shrink-0" />
                            {o}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Right — meta + CTAs */}
                <div className="p-8 flex flex-col justify-between bg-white/[0.02]">
                  <div className="space-y-5">
                    <div>
                      <span className="text-xs font-bold text-white/30 uppercase tracking-widest block mb-1">Ideal For</span>
                      <p className="text-white/70 text-sm">{svc.ideal}</p>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white/30 uppercase tracking-widest block mb-1">Engagement</span>
                      <p className="text-white/70 text-sm">{svc.engagement}</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 mt-8">
                    <Link
                      href={`/contact?service=${svc.id}`}
                      className="w-full text-center px-5 py-3 rounded-xl bg-[var(--gold)] text-[var(--navy)] text-sm font-bold hover:bg-[var(--gold-dark)] transition-colors duration-200"
                    >
                      Discuss This Service
                    </Link>
                    <Link
                      href="/contact?type=strategy"
                      className="w-full text-center px-5 py-3 rounded-xl border border-white/[0.12] text-white/70 text-sm font-medium hover:border-[var(--gold)]/40 hover:text-[var(--gold)] transition-all duration-200"
                    >
                      Book a Strategy Call
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Final CTA ──────────────────────────────────────────── */}
        <section className="py-24 px-6 border-t border-white/[0.06]">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Not sure which service fits?{" "}
              <span className="text-gradient-gold">Let&apos;s find out together.</span>
            </h2>
            <p className="text-white/50 text-sm mb-10 max-w-lg mx-auto leading-relaxed">
              Book a free 30-minute strategy call. We&apos;ll listen to what you&apos;re building, tell you
              where we can help, and be honest when we can&apos;t.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact?type=strategy"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[var(--gold)] text-[var(--navy)] font-bold text-sm hover:bg-[var(--gold-dark)] transition-colors duration-200"
              >
                Book a Strategy Call
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-white/[0.15] text-white/70 font-medium text-sm hover:border-[var(--gold)]/40 hover:text-[var(--gold)] transition-all duration-200"
              >
                About Laxm
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}