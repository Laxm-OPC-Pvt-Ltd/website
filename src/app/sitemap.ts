import type { MetadataRoute } from "next";

const routes = [
  "",
  "/about",
  "/contact",
  "/services",
  "/products",
  "/blog",
  "/privacy-policy",
  "/cookie-policy",
  "/terms-of-service",
  "/terms-and-conditions",
  "/refund-policy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.laxm.example";
  const now = new Date();
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7,
  }));
}
