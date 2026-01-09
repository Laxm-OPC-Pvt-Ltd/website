import type { Metadata } from "next";
import Card from "@/components/Card";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Advisory, IT consulting, innovation (AI/ML), and custom solutions tailored to your goals.",
  keywords: [
    "Services",
    "Advisory",
    "IT Consulting",
    "Innovation",
    "Custom Solutions",
  ],
  openGraph: {
    images: [{ url: "/laxm_logo.png", width: 1200, height: 630 }],
  },
  twitter: {
    images: ["/laxm_logo.png"],
  },
};

export default function Services() {
  const services = [
    {
      title: "Advisory",
      description:
        "Strategy, architecture, roadmaps, and transformation leadership.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z"
        />
      ),
      features: [
        "Digital Strategy",
        "Enterprise Architecture",
        "Tech Roadmap",
        "CTO Advisory",
      ],
    },
    {
      title: "IT Consulting",
      description: "Cloud, DevOps, platform engineering, and modernization.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      ),
      features: [
        "Cloud Migration",
        "DevOps & SRE",
        "Platform Engineering",
        "Legacy Modernization",
      ],
    },
    {
      title: "Innovation",
      description: "AI/ML product discovery, prototyping, and delivery.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      ),
      features: [
        "AI/ML Solutions",
        "GenAI Integration",
        "Rapid Prototyping",
        "Data Engineering",
      ],
    },
    {
      title: "Custom Solutions",
      description:
        "Bespoke applications, integrations, and end-to-end systems.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      ),
      features: [
        "Full Stack Development",
        "API Integration",
        "Mobile Apps",
        "Microservices",
      ],
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="hero-gradient text-white relative overflow-hidden py-24 min-h-[50vh] flex items-center">
        <div className="absolute inset-0 grid-overlay opacity-30 pointer-events-none" />
        <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-[var(--gold)]/5 rounded-full blur-3xl animate-pulse-glow" />

        <div className="mx-auto max-w-7xl px-6 relative z-10 w-full text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight animate-fade-in-up">
            Our <span className="text-gradient-gold">Services</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-100">
            We combine strategic insight with technical excellence to deliver
            solutions that drive real business value.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-[var(--ivory)] py-24 relative -mt-20">
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                variant="solid"
                className="group p-10 hover:shadow-2xl transition-all duration-300 border-t-4 border-t-[var(--gold)] hover:-translate-y-2"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-[var(--navy)]/5 flex items-center justify-center group-hover:bg-[var(--navy)] transition-colors duration-300">
                    <svg
                      className="w-7 h-7 text-[var(--navy)] group-hover:text-[var(--gold)] transition-colors"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {service.icon}
                    </svg>
                  </div>
                  <span className="text-4xl font-bold text-[var(--border)] group-hover:text-[var(--gold)]/20 transition-colors">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-[var(--navy)] mb-4 group-hover:text-[var(--gold-dark)] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[var(--text-secondary)] text-lg mb-8 leading-relaxed">
                  {service.description}
                </p>

                <ul className="grid grid-cols-2 gap-3">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center text-sm font-medium text-[var(--navy)]/80"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[var(--navy)] py-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-10"></div>
        <div className="mx-auto max-w-4xl px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Ready to elevate your business?
          </h2>
          <div className="flex justify-center gap-4">
            <CTAButton href="/contact">Get in Touch</CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
