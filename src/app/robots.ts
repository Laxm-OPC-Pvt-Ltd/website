import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/"],
      },
      {
        userAgent: ["GPTBot", "Google-Extended", "ClaudeBot", "PerplexityBot", "CCBot"],
        allow: [
          "/",
          "/llms.txt",
          "/llms-full.txt",
          "/.well-known/ai.txt",
          "/ai/",
          "/api/faqs",
          "/api/faqs/search",
          "/api/content",
          "/api/llms-full",
        ],
        disallow: ["/admin/"],
      },
    ],
    sitemap: [
      "https://www.thelaxm.com/sitemap.xml",
      "https://www.thelaxm.com/sitemap-llm.xml",
    ],
    host: "https://www.thelaxm.com",
  };
}
