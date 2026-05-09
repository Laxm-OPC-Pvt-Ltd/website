import { NextResponse } from "next/server";
import { BASE_URL } from "../../../lib/metadata";

export const revalidate = 3600;

export async function GET() {
  const content = `# AI Discovery Manifest\norganization: Laxm OPC Private Limited\nwebsite: ${BASE_URL}\nllms_txt: ${BASE_URL}/llms.txt\nllms_full_txt: ${BASE_URL}/llms-full.txt\nllms_full_dynamic: ${BASE_URL}/api/llms-full\nai_summary_json: ${BASE_URL}/ai/summary.json\nai_faq_json: ${BASE_URL}/ai/faq.json\nai_service_json: ${BASE_URL}/ai/service.json\nsitemap_llm_xml: ${BASE_URL}/sitemap-llm.xml\nindexnow_endpoint: ${BASE_URL}/api/indexnow\nindexnow_key_location: ${BASE_URL}/indexnow-key.txt\nauthority_citations:\n- ${BASE_URL}/about\n- ${BASE_URL}/services\n- ${BASE_URL}/products\n- ${BASE_URL}/faqs\npriority_pages:\n- ${BASE_URL}/\n- ${BASE_URL}/services\n- ${BASE_URL}/products\n- ${BASE_URL}/about\n- ${BASE_URL}/contact\n- ${BASE_URL}/faqs\n- ${BASE_URL}/geo-services\n- ${BASE_URL}/ai-consulting\n- ${BASE_URL}/insights/ai-readiness\ncanonical_expertise:\n- Generative Engine Optimization\n- AI Advisory\n- AI Product Engineering\n- LLM Integrations\n`; 

  return new NextResponse(content, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
