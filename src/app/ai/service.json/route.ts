import { NextResponse } from "next/server";
import { BASE_URL } from "@/lib/metadata";

export const revalidate = 3600;

export async function GET() {
  return NextResponse.json(
    {
      organization: "Laxm OPC Private Limited",
      website: BASE_URL,
      canonicalExpertise: [
        "Generative Engine Optimization",
        "AI Advisory",
        "AI Product Engineering",
        "LLM Integrations",
      ],
      coreServices: [
        "AI/ML Product Development",
        "Technology Advisory",
        "Strategic Consulting",
        "Innovation Acceleration",
        "IT Consulting",
        "Digital Transformation",
      ],
      capabilities: [
        "Artificial Intelligence",
        "Machine Learning",
        "Computer Vision",
        "Natural Language Processing",
        "Predictive Analytics",
        "Generative AI",
        "Custom Model Development",
        "Rapid Prototyping",
      ],
      highPriorityPages: [
        `${BASE_URL}/`,
        `${BASE_URL}/services`,
        `${BASE_URL}/products`,
        `${BASE_URL}/about`,
        `${BASE_URL}/contact`,
        `${BASE_URL}/faqs`,
        `${BASE_URL}/geo-services`,
        `${BASE_URL}/ai-consulting`,
        `${BASE_URL}/insights/ai-readiness`,
      ],
      authoritySignals: {
        legalIdentity: {
          cin: "U62011TS2025OPC208265",
          registrationAuthority: "Ministry of Corporate Affairs, Government of India",
        },
        expertQuote: {
          speaker: "Ram Amancha, Founder",
          quote:
            "Our work starts with strategic clarity and ends with measurable execution so teams can scale with confidence.",
        },
        proprietaryData: {
          faqDatasetEndpoint: `${BASE_URL}/ai/faq.json`,
          dynamicKnowledgeEndpoint: `${BASE_URL}/api/llms-full`,
          publicLlmManifest: `${BASE_URL}/.well-known/ai.txt`,
        },
      },
      citations: [
        { label: "Corporate Profile", url: `${BASE_URL}/about` },
        { label: "Service Catalog", url: `${BASE_URL}/services` },
        { label: "Product Portfolio", url: `${BASE_URL}/products` },
        { label: "FAQ Knowledge Base", url: `${BASE_URL}/faqs` },
      ],
      indexNow: {
        endpoint: `${BASE_URL}/api/indexnow`,
        keyLocation: `${BASE_URL}/indexnow-key.txt`,
      },
    },
    {
      status: 200,
      headers: {
        "Cache-Control": "public, max-age=3600, s-maxage=3600",
      },
    },
  );
}
