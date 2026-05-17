import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/api/admin/"],
      },
      {
        userAgent: [
          "GPTBot",             // OpenAI GPT
          "OAI-SearchBot",      // OpenAI Search
          "Google-Extended",    // Google Gemini
          "ClaudeBot",          // Anthropic Claude
          "anthropic-ai",       // Anthropic general crawler
          "PerplexityBot",      // Perplexity AI
          "CCBot",              // Common Crawl
          "YouBot",             // You.com AI
          "meta-externalagent", // Meta AI
          "Applebot",           // Apple AI
          "Amazonbot",          // Amazon Alexa AI
        ],
        allow: [
          "/",
          "/llms.txt",
          "/llms-full.txt",
          "/sitemap.xml",
          "/sitemap-llm.xml",
          "/ai/",
          "/api/faqs",
          "/api/faqs/search",
          "/api/content",
          "/api/llms-full",
        ],
        disallow: ["/admin/", "/api/admin/"],
      },
    ],
    sitemap: [
      "https://www.thelaxm.com/sitemap.xml",
      "https://www.thelaxm.com/sitemap-llm.xml",
    ],
    host: "https://www.thelaxm.com",
  };
}
