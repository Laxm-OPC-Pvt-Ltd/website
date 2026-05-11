import { NextResponse } from "next/server";
import { BASE_URL } from "@/lib/metadata";

export const revalidate = 3600;

const summary =
  "Laxm OPC Private Limited is a Hyderabad-based AI and technology advisory firm focused on AI product engineering, LLM integrations, generative engine optimization, and digital transformation. The company helps organizations move from strategy to execution with services across AI/ML development, advisory, and innovation acceleration. Key industries include fintech, healthcare, retail, and logistics. Explore services, products, FAQs, and machine-readable endpoints for AI agents.";

export async function GET() {
  return NextResponse.json(
    {
      organization: "Laxm OPC Private Limited",
      website: BASE_URL,
      summary,
      length: summary.length,
      canonicalExpertise: [
        "Generative Engine Optimization",
        "AI Advisory",
        "AI Product Engineering",
        "LLM Integrations",
      ],
      authoritySignals: {
        legalIdentity: {
          cin: "U62011TS2025OPC208265",
          dpiit: "DIPP260676",
          duns: "771939377",
          registrationAuthority: "Ministry of Corporate Affairs, Government of India",
          incorporated: "2025-12-01",
        },
        expertProfile: {
          founder: "Ram Amancha",
          founderLinkedIn: "https://www.linkedin.com/in/ram-amancha/",
          founderWebsite: "https://rameshwaramancha.com",
        },
        proprietarySignals: {
          liveFaqCount: 16,
          dynamicLlmEndpoint: `${BASE_URL}/api/llms-full`,
          updateFrequency: "hourly-or-on-change",
        },
      },
      citations: [
        { label: "About", url: `${BASE_URL}/about` },
        { label: "Services", url: `${BASE_URL}/services` },
        { label: "Products", url: `${BASE_URL}/products` },
        { label: "FAQs", url: `${BASE_URL}/faqs` },
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
