import Card from "@/components/Card";
import type { Metadata } from "next";
import { canonicalUrl, BASE_URL } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "About",
  description:
    "Laxm (OPC) Private Limited is a technology advisory and innovation company helping organizations design strategy, build scalable platforms, and deliver AI/ML-powered products.",
  keywords: [
    "Laxm",
    "Laxm OPC Private Limited",
    "About",
    "Advisory",
    "IT Consulting",
    "Innovation",
    "Technology Strategy",
    "AI ML",
    "Ram Amancha",
    "Hyderabad",
  ],
  alternates: {
    canonical: canonicalUrl("/about"),
  },
  openGraph: {
    title: "About Laxm (OPC) Private Limited",
    description:
      "Technology advisory and innovation company helping organizations design strategy, build scalable platforms, and deliver AI/ML-powered products.",
    url: canonicalUrl("/about"),
    siteName: "Laxm",
    type: "website",
    images: [
      {
        url: "/laxm_logo.png",
        width: 1200,
        height: 630,
        alt: "Laxm (OPC) Private Limited — Technology Advisory & Innovation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Laxm (OPC) Private Limited",
    description:
      "Technology advisory and innovation company helping organizations design strategy, build scalable platforms, and deliver AI/ML-powered products.",
    images: ["/laxm_logo.png"],
  },
};

export default function About() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${BASE_URL}/about`,
    name: "About Laxm (OPC) Private Limited",
    url: `${BASE_URL}/about`,
    description:
      "Laxm (OPC) Private Limited is a technology advisory and innovation company helping organizations design strategy, build scalable platforms, and deliver AI/ML-powered products.",
    isPartOf: { "@id": `${BASE_URL}/#website` },
    about: { "@id": `${BASE_URL}/#organization` },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "About", item: `${BASE_URL}/about` },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex flex-col">
      {/* Hero Section */}
      <section className="hero-gradient text-white relative overflow-hidden py-24 min-h-[60vh] flex items-center">
        <div className="absolute inset-0 grid-overlay opacity-30 pointer-events-none" />
        {/* Animated ambient glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--gold)]/10 rounded-full blur-3xl animate-pulse-glow" />

        <div className="mx-auto max-w-5xl px-6 relative z-10 w-full">
          <Card
            variant="glass-dark"
            className="border-white/10 bg-[var(--navy)]/40 backdrop-blur-xl shadow-2xl animate-fade-in-up"
          >
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-1">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
                  About <span className="text-gradient-gold">Laxm</span>
                </h1>
                <p className="text-xl text-white/90 leading-relaxed font-medium mb-6">
                  Laxm (OPC) Private Limited is a technology advisory and innovation company helping
                  clients, teams, and organizations design strategy, build scalable platforms, and deliver
                  AI/ML-powered products.
                </p>
                <div className="h-1 w-20 bg-gradient-to-r from-[var(--gold)] to-transparent rounded-full mb-6"></div>
                <p className="text-lg text-white/80 leading-relaxed">
                  <strong className="text-white">Laxm</strong> is more than a
                  name — it is a philosophy rooted in purpose, clarity, and
                  execution. In Sanskrit, “Lakshyam” means{" "}
                  <em className="text-[var(--gold)] not-italic font-semibold">
                    aim
                  </em>{" "}
                  or{" "}
                  <em className="text-[var(--gold)] not-italic font-semibold">
                    target
                  </em>
                  . At Laxm, we transform abstract ideas into actionable plans,
                  measurable outcomes, and sustainable growth.
                </p>
              </div>
              <div className="md:w-1/3 hidden md:block">
                {/* Decorative abstract visual */}
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--gold)_0%,_transparent_70%)] opacity-20 animate-pulse"></div>
                  <svg
                    className="w-24 h-24 text-[var(--gold)] opacity-80"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Vision & Mission - Clean Ivory Background with Floating Cards */}
      <section id="vision-mission" className="bg-[var(--ivory)] py-24 relative">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Vision Card */}
            <div className="bg-white rounded-2xl p-10 shadow-lg border border-[var(--border)] hover:border-[var(--gold)]/30 transition-all hover:-translate-y-2 group">
              <div className="w-16 h-16 rounded-full bg-[var(--navy)]/5 flex items-center justify-center mb-6 group-hover:bg-[var(--navy)] transition-colors duration-300">
                <svg
                  className="w-8 h-8 text-[var(--navy)] group-hover:text-[var(--gold)] transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-[var(--navy)] mb-4">
                Vision
              </h2>
              <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
                To empower businesses, professionals, and innovators with the
                clarity, strategy, and execution mechanisms needed to achieve
                their highest goals — turning ambitious aims into measurable
                impact.
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-white rounded-2xl p-10 shadow-lg border border-[var(--border)] hover:border-[var(--gold)]/30 transition-all hover:-translate-y-2 group">
              <div className="w-16 h-16 rounded-full bg-[var(--navy)]/5 flex items-center justify-center mb-6 group-hover:bg-[var(--navy)] transition-colors duration-300">
                <svg
                  className="w-8 h-8 text-[var(--navy)] group-hover:text-[var(--gold)] transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-[var(--navy)] mb-4">
                Mission
              </h2>
              <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
                We exist to help leaders and organizations translate ideas into
                action by providing expert guidance, proven methodologies, and
                disciplined execution systems that align goals with outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Founder - Premium Split Layout */}
      <section
        id="about-founder"
        className="bg-white py-24 border-y border-[var(--border)]"
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="bg-[var(--navy)] rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-[1fr_1.5fr]">
              <div className="bg-[var(--navy-light)] p-10 flex flex-col justify-center items-center text-center border-r border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--gold)_0%,_transparent_50%)] opacity-10"></div>
                <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-[var(--gold)] to-[var(--gold-dark)] p-1 mb-6">
                  <div className="w-full h-full rounded-full bg-[var(--navy)] flex items-center justify-center text-4xl font-bold text-white">
                    RA
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">
                  Ram Amancha
                </h3>
                <p className="text-[var(--gold)] text-sm font-medium uppercase tracking-wider">
                  Founder & Principal
                </p>
              </div>
              <div className="p-10 md:p-14 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-white mb-6">
                  From Strategy to{" "}
                  <span className="text-gradient-gold">Execution</span>
                </h2>
                <p className="text-white/80 text-lg leading-relaxed mb-6">
                  <strong>Ram Amancha</strong> (also known as Rameshwar Amancha)
                  is the founder of Laxm and a seasoned leader with over two
                  decades of diverse experience in information technology,
                  business consulting, and entrepreneurship.
                </p>
                <p className="text-white/80 text-lg leading-relaxed">
                  He is recognized for helping individuals and organizations
                  scale by converting strategic thinking into actionable
                  execution, bridging the gap between abstract vision and
                  tangible reality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Laxm - Deep Navy Background with Gold Accents */}
      <section
        id="why-laxm"
        className="bg-[var(--navy)] py-24 relative overflow-hidden"
      >
        <div className="absolute inset-0 grid-overlay opacity-10"></div>
        <div className="mx-auto max-w-6xl px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="text-gradient-gold">Laxm?</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              We don't just advise. We partner with you to build the systems
              that deliver success.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Clarity of Purpose",
                desc: "We help organizations define what truly matters, cutting through noise to find the signal.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                ),
              },
              {
                title: "Strategic Frameworks",
                desc: "Aligning goals with measurable outcomes using proven models that scale.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z"
                  />
                ),
              },
              {
                title: "Execution Systems",
                desc: "Building reliable mechanisms that ensure progress is inevitable, not accidental.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                ),
              },
              {
                title: "Outcome-Driven",
                desc: "Focused on impact, not just activity. We measure success by results.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                ),
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all hover:-translate-y-2 duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-[var(--gold)]/10 flex items-center justify-center mb-6 group-hover:bg-[var(--gold)] transition-colors duration-300">
                  <svg
                    className="w-6 h-6 text-[var(--gold)] group-hover:text-[var(--navy)] transition-colors"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {item.icon}
                  </svg>
                </div>
                <h3 className="font-bold text-xl mb-3 text-white group-hover:text-[var(--gold)] transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <p className="text-2xl font-bold text-white/90 mb-2">
              At Laxm, you don’t just set goals.
            </p>
            <p className="text-3xl md:text-4xl font-extrabold text-gradient-gold">
              You achieve them.
            </p>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
