import type { MetadataRoute } from "next";
import { posts } from "@/data/posts";

const routes = [
  "",
  "/about",
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
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.thelaxm.com";
  const now = new Date();

  const staticRoutes = routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.7,
  }));

  const blogRoutes = posts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}
