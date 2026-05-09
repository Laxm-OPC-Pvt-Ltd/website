import { NextResponse } from "next/server";
import { BASE_URL } from "@/lib/metadata";
import { posts } from "@/data/posts";

export const revalidate = 3600;

function urlNode(url: string, priority: number, changefreq: string): string {
  return `<url><loc>${url}</loc><changefreq>${changefreq}</changefreq><priority>${priority.toFixed(1)}</priority></url>`;
}

export async function GET() {
  const highPriorityUrls = [
    `${BASE_URL}/`,
    `${BASE_URL}/services`,
    `${BASE_URL}/products`,
    `${BASE_URL}/about`,
    `${BASE_URL}/contact`,
    `${BASE_URL}/faqs`,
    `${BASE_URL}/geo-services`,
    `${BASE_URL}/ai-consulting`,
    `${BASE_URL}/insights/ai-readiness`,
    `${BASE_URL}/llms.txt`,
    `${BASE_URL}/llms-full.txt`,
    `${BASE_URL}/.well-known/ai.txt`,
    `${BASE_URL}/ai/summary.json`,
    `${BASE_URL}/ai/faq.json`,
    `${BASE_URL}/ai/service.json`,
  ];

  const blogUrls = posts.map((post) => `${BASE_URL}/blog/${post.slug}`);

  const urlset = [
    ...highPriorityUrls.map((url) => urlNode(url, 1.0, "weekly")),
    ...blogUrls.map((url) => urlNode(url, 0.6, "monthly")),
  ].join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urlset}</urlset>`;

  return new NextResponse(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
