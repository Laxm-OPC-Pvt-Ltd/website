import type { MetadataRoute } from "next";
import { posts } from "@/data/posts";

const routes = [
  "",
  "/about",
  "/ai-assistant",
  "/contact",
  "/services",
  "/products",
  "/blog",
  "/faqs",
  "/privacy-policy",
  "/cookie-policy",
  "/terms-of-service",
  "/terms-and-conditions",
  "/refund-policy",
  "/llms.txt",
  "/llms-full.txt",
  "/.well-known/ai.txt",
  "/ai/summary.json",
  "/ai/faq.json",
  "/ai/service.json",
  "/sitemap-llm.xml",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.thelaxm.com";
  const now = new Date();

  const staticRoutes = routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? ("daily" as const) : ("weekly" as const),
    priority: route === "" ? 1 : route.startsWith("/ai/") || route.includes("llm") ? 0.8 : 0.7,
  }));

  const blogRoutes = posts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}
