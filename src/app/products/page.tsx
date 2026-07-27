import type { Metadata } from "next";
import { canonicalUrl } from "@/lib/metadata";
import CTAButton from "@/components/CTAButton";
import Image from "next/image"
export const metadata: Metadata = {
  title: "AI/ML Products & Accelerators | Laxm OPC Private Limited",
  description:
    "Explore Laxm's AI-powered products: LLMKosha, Insight AI, Ops Assist, and Vision ML. Enterprise-grade accelerators that compress your time-to-value.",
  keywords: [
    "Products",
    "AI",
    "ML",
    "LLMKosha",
    "Insight AI",
    "Ops Assist",
    "Vision ML",
    "Innovation",
    "Accelerators",
    "Laxm",
  ],
  alternates: { canonical: canonicalUrl("/products") },
  openGraph: {
    title: "AI/ML Products - Laxm OPC Private Limited",
    description: "Enterprise-grade AI/ML accelerators from Laxm.",
    url: canonicalUrl("/products"),
    siteName: "Laxm",
    type: "website",
    images: [
      { url: "/laxm_logo.png", width: 1200, height: 630, alt: "Laxm Products" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI/ML Products - Laxm",
    images: ["/laxm_logo.png"],
  },
};

type Product = {
  tag: string;
  title: string;
  description: string;
  features: string[];
  androidLink: string | null;
  iosLink: string | null;
  webLink: string | null;
  iconPath: string | null;
  faviconPath: string | null;
};

function DownloadBadge({
  href,
  label,
  sublabel,
  platform,
}: {
  href: string;
  label: string;
  sublabel: string;
  platform: "android" | "ios" | "web";
}) {
  const icon =
    platform === "android" ? (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-6 w-6 text-white"
        fill="currentColor"
      >
        <path d="M7.15 4.79 5.9 2.53a.5.5 0 1 1 .87-.5l1.28 2.31A9.44 9.44 0 0 1 12 3.5c1.4 0 2.73.3 3.95.84l1.28-2.31a.5.5 0 0 1 .88.48l-1.25 2.27A8.13 8.13 0 0 1 20.5 11H3.5c0-2.65 1.43-4.97 3.65-6.21ZM8.5 8.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm7 0a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM4 12h2v6a2 2 0 1 1-4 0v-4a2 2 0 0 1 2-2Zm14 0h2a2 2 0 0 1 2 2v4a2 2 0 1 1-4 0v-6Zm-11 0h10v8.5a2.5 2.5 0 0 1-5 0 2.5 2.5 0 0 1-5 0V12Z" />
      </svg>
    ) : platform === "ios" ? (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-6 w-6 text-white"
        fill="currentColor"
      >
        <path d="M15.15 2c.1 1.18-.35 2.28-.97 3.01-.68.79-1.8 1.4-2.9 1.31-.14-1.14.4-2.33 1.02-3.04.67-.78 1.85-1.34 2.85-1.28ZM19.26 17.23c-.52 1.18-.78 1.7-1.45 2.75-.93 1.46-2.25 3.28-3.9 3.3-1.47.02-1.85-.95-3.84-.94-1.98.01-2.4.96-3.88.94-1.65-.02-2.9-1.67-3.83-3.13-2.6-4.09-2.87-8.9-1.27-11.35 1.14-1.74 2.94-2.76 4.64-2.76 1.73 0 2.82.95 4.25.95 1.39 0 2.24-.95 4.24-.95 1.52 0 3.13.83 4.27 2.25-3.74 2.05-3.13 7.32.77 8.94Z" />
      </svg>
    ) : (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-6 w-6 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M3 12h18M12 3a15.3 15.3 0 0 1 4 9 15.3 15.3 0 0 1-4 9 15.3 15.3 0 0 1-4-9 15.3 15.3 0 0 1 4-9Z" />
        <path d="M5 7.5c2.1 1 4.5 1.5 7 1.5s4.9-.5 7-1.5M5 16.5c2.1-1 4.5-1.5 7-1.5s4.9.5 7 1.5" />
      </svg>
    );

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex min-w-[180px] items-center gap-3 rounded-xl border border-white/12 bg-black px-4 py-3 text-left transition-all duration-300 hover:border-[var(--gold)]/40 hover:bg-white/8"
      aria-label={`${label} ${sublabel}`}
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/8">
        {icon}
      </span>
      <span className="flex flex-col leading-tight">
        <span className="text-[10px] uppercase tracking-[0.18em] text-white/50">
          {label}
        </span>
        <span className="text-sm font-semibold text-white">{sublabel}</span>
      </span>
    </a>
  );
}

const products: Product[] = [
  {
    tag: "Live",
    title: "LLMKosha",
    description:
      "AI-powered platform to track, analyze, and improve your online visibility across search engines and competitors. Transform your website for the AI revolution and get discovered by AI search engines.",
    features: [
      "Rank Tracking",
      "Competitor Analysis",
      "AI Recommendations",
      "Domain Scanning",
      "Demand Signals",
      "Task Automation",
    ],
    androidLink: null,
    iosLink: null,
    webLink: "https://llmkosha.com",
    iconPath: "M13 10V3L4 14h7v7l9-11h-7z M3 3l18 18",
    faviconPath: null
  },
  {
    tag: "Live",
    title: "Smart AI Alarm",
    description:
      "Ultimate Morning Routine. Tired of mindlessly hitting snooze? Smart AI Alarm turns your waking moments into an engaging, productive experience with cognitive challenges, gamified tracking, and a personalized AI morning assistant.",
    features: [
      "Flexible Scheduling & Snooze",
      "Voice & Music Audio Sequencing",
      "Missed Alarm Recovery",
      "Math & Word Puzzles",
      "Memory & Logic Training",
      "AI Chat Challenges",
      "Success Streak Tracking",
      "Personalized Wake Score",
      "AI Morning Briefing",
      "14-Language Localization",
      "Bulletproof Platform Support",
      "Secure Cloud Sync",
    ],
    androidLink:
      "https://play.google.com/store/apps/details?id=com.laxm.smartaialarm&pcampaignid=web_share",
    iosLink: "https://apps.apple.com/us/app/smart-ai-alarm/id6770541551",
    webLink: null,
    iconPath:
      "M12 2c.5 0 1 .19 1.41.59l2.83 2.83c.78.78.78 2.05 0 2.83L12 12.59c-.78.78-2.05.78-2.83 0L6.34 8.76c-.78-.78-.78-2.05 0-2.83L9.17 2.59C9.57 2.19 10.07 2 10.57 2H12zm0 2h-1.43l-2.83 2.83L12 11.07l4.26-4.24L13.43 6H12zm-1 6a1 1 0 100 2 1 1 0 000-2zm-4 4h10v2H7v-2zm0 4h10v2H7v-2z",
    faviconPath: null
  },
  {
    tag: "Live",
    title: "NA DIARY",
    description:
      "NaDiary is a modular journaling platform that adapts to your day, not the other way around. With block-based entries, morning planning, evening tracking, and smart notifications, it creates a seamless daily reflection habit for users who want flexibility and intelligence in their journaling practice.",
    features: [
      "Daily Canvas for Morning Planning & Evening Reflection",
      "Daily Selfie",
      "Smart Statistics",
      "Customize per your need",
      "Offline Support with Cloud Sync",
      "Multi Device Sync and Support",
      "Cross Platform Support",
      "Most Features are Free",
      "Download Journal as PDF",
      "No Limitations on blocks and Data",
      "Awesome New Features",
      "Secure Cloud Sync",
    ],
    androidLink:
      "https://play.google.com/store/apps/details?id=com.laxm.nadiary",
    iosLink: "https://apps.apple.com/us/app/na-diary/id6794532320",
    webLink: "https://nadiary.thelaxm.com/",
    iconPath: null,
    faviconPath: "https://nadiary.thelaxm.com/favicon.svg",
  },

  {
    tag: "Beta",
    title: "Insight AI",
    description:
      "Advanced knowledge discovery engine that transforms unstructured data into actionable strategic insights using state-of-the-art NLP.",
    features: [
      "Document Summarization",
      "Sentiment Analysis",
      "Trend Forecasting",
      "Entity Extraction",
    ],
    androidLink: null,
    iosLink: null,
    webLink: null,
    iconPath:
      "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    faviconPath: null
  },
  {
    tag: "Coming Soon",
    title: "Ops Assist",
    description:
      "Intelligent automation suite for DevOps teams, reducing manual toil and predicting infrastructure bottlenecks before they occur.",
    features: [
      "Auto-Remediation",
      "Log Anomaly Detection",
      "Capacity Planning",
      "SLA Monitoring",
    ],
    androidLink: null,
    iosLink: null,
    webLink: null,
    iconPath:
      "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
    faviconPath: null
  },
  {
    tag: "Coming Soon",
    title: "Vision ML",
    description:
      "Pre-trained computer vision models and templates designed for rapid prototyping in retail, security, and manufacturing.",
    features: [
      "Object Detection",
      "Facial Recognition",
      "Quality Control",
      "Scene Classification",
    ],
    androidLink: null,
    iosLink: null,
    webLink: null,
    iconPath:
      "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
    faviconPath: null
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
      <section className="relative overflow-hidden pt-28 pb-20 hero-gradient">
        <div className="absolute inset-0 grid-overlay opacity-20 pointer-events-none" />
        <div className="absolute -top-40 right-1/4 h-[600px] w-[600px] rounded-full bg-[var(--gold)]/5 blur-3xl pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <span className="mb-6 inline-block rounded-full border border-[var(--gold)]/30 bg-[var(--gold)]/10 px-4 py-1.5 text-sm font-medium tracking-wide text-[var(--gold)]">
            Product Suite
          </span>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white animate-fade-in-up md:text-6xl">
            Our <span className="text-gradient-gold">Products</span>
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/60">
            AI/ML accelerators that compress your time-to-value. From
            intelligence platforms to operational automation, built to solve
            real problems.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
            {products.map((product) => {
              const hasPlatformLinks =
                Boolean(product.androidLink) ||
                Boolean(product.iosLink) ||
                Boolean(product.webLink);

              return (
                <div
                  key={product.title}
                  className="group flex flex-col rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--gold)]/30 hover:bg-white/[0.06]"
                >
                  <div className="mb-6 flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--gold)]/10 transition-colors duration-300 group-hover:bg-[var(--gold)]">
                      {product.iconPath ? (
                        <svg
                          className="h-6 w-6 text-[var(--gold)] transition-colors group-hover:text-[var(--navy)]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d={product.iconPath}
                          />
                        </svg>
                      ) : product.faviconPath ? (
                        <Image
                          src={product.faviconPath}
                          alt={product.title}
                          width={24}
                          height={24}
                          className="h-6 w-6"
                        />
                      ) : null}
                    </div>

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${tagColors[product.tag]}`}
                    >
                      {product.tag}
                    </span>
                  </div>

                  <h3 className="mb-3 text-xl font-bold text-white transition-colors group-hover:text-[var(--gold)]">
                    {product.title}
                  </h3>
                  <p className="mb-6 text-sm leading-relaxed text-white/55">
                    {product.description}
                  </p>

                  <ul className="mb-8 grid flex-1 grid-cols-2 gap-x-4 gap-y-2">
                    {product.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-xs text-white/50"
                      >
                        <span className="h-1 w-1 flex-shrink-0 rounded-full bg-[var(--gold)]" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {hasPlatformLinks ? (
                    <div className="mb-5 mt-auto flex flex-wrap gap-3">
                      {product.androidLink ? (
                        <DownloadBadge
                          href={product.androidLink}
                          label="Get it on"
                          sublabel="Google Play"
                          platform="android"
                        />
                      ) : null}
                      {product.iosLink ? (
                        <DownloadBadge
                          href={product.iosLink}
                          label="Download on the"
                          sublabel="App Store"
                          platform="ios"
                        />
                      ) : null}
                      {product.webLink ? (
                        <DownloadBadge
                          href={product.webLink}
                          label="Open on"
                          sublabel="Website"
                          platform="web"
                        />
                      ) : null}
                    </div>
                  ) : null}

                  <div className="flex gap-3">
                    {product.webLink ? (
                      <CTAButton
                        href={product.webLink}
                        variant="primary"
                        className="flex-1 justify-center"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${product.title} website`}
                      >
                        Visit Website
                      </CTAButton>
                    ) : (
                      <CTAButton
                        href="/contact"
                        variant="primary"
                        className="flex-1 justify-center"
                        aria-label={`Request a demo for ${product.title}`}
                      >
                        {product.tag === "Coming Soon"
                          ? "Join Waitlist"
                          : "Request Demo"}
                      </CTAButton>
                    )}
                    <CTAButton
                      href="/contact"
                      variant="outline"
                      className="flex-1 justify-center text-white border-white/20 hover:bg-white/10"
                      aria-label={`Request more information about ${product.title}`}
                    >
                      Learn More
                    </CTAButton>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-white/[0.06] py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Ready to{" "}
            <span className="text-gradient-gold">Build the Future?</span>
          </h2>
          <p className="mx-auto mb-8 max-w-md text-sm leading-relaxed text-white/45">
            Let&apos;s discuss how our products can accelerate your roadmap and
            deliver measurable ROI.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <CTAButton
              href="/contact"
              variant="primary"
              aria-label="Request a Demo"
            >
              Request a Demo
            </CTAButton>
            <CTAButton
              href="/services"
              variant="outline"
              className="text-white border-white/25 hover:bg-white/10"
              aria-label="View Services"
            >
              View Services
            </CTAButton>
          </div>
        </div>
      </section>
    </main>
  );
}
