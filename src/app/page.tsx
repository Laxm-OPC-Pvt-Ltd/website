import { GenerativeHero } from "@/components/GenerativeHero";
import TrustIndicators from "@/components/TrustIndicators";
import AudienceSegmentation from "@/components/AudienceSegmentation";
import ServicesOverview from "@/components/ServicesOverview";
import HowWeWork from "@/components/HowWeWork";
import CaseStudyHighlights from "@/components/CaseStudyHighlights";
import FounderSection from "@/components/FounderSection";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQSection";
import LeadCaptureCTA from "@/components/LeadCaptureCTA";
import type { Metadata } from "next";
import { canonicalUrl, BASE_URL } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Founder-Friendly MVP Development & Technology Advisory | Laxm",
  description:
    "Laxm partners with founders, business owners, and SMEs to plan, build, and ship software products — MVPs, AI applications, and workflow automation. Technical advisory and hands-on execution under one roof.",
  keywords: [
    "MVP development",
    "fractional CTO",
    "technology advisory",
    "AI product development",
    "workflow automation",
    "startup technical advisor",
    "SME software development",
    "healthcare technology",
    "Laxm",
    "Ram Amancha",
    "Hyderabad",
  ],
  alternates: { canonical: canonicalUrl("/") },
  openGraph: {
    title: "Founder-Friendly MVP Development & Technology Advisory | Laxm",
    description:
      "Turn your idea into a working product. Technology advisory and MVP development for founders and SMEs — without the overhead of an in-house engineering team.",
    url: canonicalUrl("/"),
    siteName: "Laxm",
    type: "website",
    images: [{ url: "/laxm_logo.png", width: 1200, height: 630, alt: "Laxm — MVP Development & Technology Advisory" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Laxm — MVP Development & Technology Advisory",
    description: "Turn your idea into a working product. Advisory + execution for founders and SMEs.",
    images: ["/laxm_logo.png"],
  },
};

const homepageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${BASE_URL}/#homepage`,
  name: "Laxm — Founder-Friendly MVP Development & Technology Advisory",
  url: BASE_URL,
  description:
    "Technology advisory and MVP development for founders, business owners, and SMEs. We help you plan, build, and ship software products without an in-house engineering team.",
  isPartOf: { "@id": `${BASE_URL}/#website` },
  about: { "@id": `${BASE_URL}/#organization` },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    ],
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }}
      />
      <main>
        {/* 1. Strong founder-focused headline + primary/secondary CTAs */}
        <GenerativeHero />

        {/* 2. Trust indicators — immediate social proof */}
        <TrustIndicators />

        {/* 3. Audience segmentation — founders vs SMEs */}
        <AudienceSegmentation />

        {/* 4. Services overview — outcome-focused grid */}
        <ServicesOverview />

        {/* 5. How we work — 4-step process */}
        <HowWeWork />

        {/* 6. Case studies / project highlights */}
        <CaseStudyHighlights />

        {/* 7. Founder credibility */}
        <FounderSection />

        {/* 8. Testimonials */}
        <Testimonials />

        {/* 9. FAQ with schema */}
        <FAQSection />

        {/* 10. Final CTA + email capture */}
        <LeadCaptureCTA />
      </main>
    </>
  );
}

