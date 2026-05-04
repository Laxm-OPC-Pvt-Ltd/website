import { faqs } from "@/data/faqs";
import { canonicalUrl, BASE_URL } from "@/lib/metadata";
import FAQClient from "@/components/FAQClient";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Frequently Asked Questions | Laxm OPC Private Limited",
    description:
      "Find answers to common questions about Laxm's AI/ML services, benefits, Hyderabad location, and project processes. Expert technology advisory and innovation.",
    keywords: [
      "FAQ",
      "Laxm OPC Private Limited",
      "AI ML services",
      "One Person Company benefits",
      "Hyderabad Financial District",
      "Technology consulting",
      "Project process",
    ],
    alternates: {
      canonical: canonicalUrl("/faqs"),
    },
    openGraph: {
      title: "FAQ - Laxm OPC Private Limited",
      description:
        "Get answers to your questions about our AI/ML services, OPC benefits, and project processes.",
      url: canonicalUrl("/faqs"),
      siteName: "Laxm",
      type: "website",
      images: [
        {
          url: "/laxm_logo.png",
          width: 1200,
          height: 630,
          alt: "Laxm OPC Private Limited — FAQ",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "FAQ - Laxm OPC Private Limited",
      description:
        "Find answers about our AI/ML services, OPC benefits, and project processes.",
      images: ["/laxm_logo.png"],
    },
  };
}

export default function FAQPage() {
  // JSON-LD Schema for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${BASE_URL}/faqs`,
    url: `${BASE_URL}/faqs`,
    name: "Frequently Asked Questions - Laxm OPC Private Limited",
    description:
      "Find answers to common questions about Laxm's AI/ML services, benefits, Hyderabad location, and project processes.",
    isPartOf: { "@id": `${BASE_URL}/#website` },
    about: { "@id": `${BASE_URL}/#organization` },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "FAQ", item: `${BASE_URL}/faqs` },
      ],
    },
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return <FAQClient jsonLd={JSON.stringify(jsonLd)} />;
}
