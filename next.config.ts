import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-DNS-Prefetch-Control", value: "on" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-XSS-Protection", value: "1; mode=block" },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
];

const nextConfig: NextConfig = {
  // Restrict server actions to known origins — prevents null-origin CSRF bypass
  // (CVE-2024-34351 and related null-origin HMR CSRF issues)
  experimental: {
    serverActions: {
      allowedOrigins: ["thelaxm.com", "www.thelaxm.com"],
    },
    // PPR (Partial Prerendering) disabled — prevents unbounded postponed
    // resume buffering DoS and unbounded memory consumption via PPR endpoint
    ppr: false,
  },

  // Restrict image optimisation to local assets only.
  // No remotePatterns keeps the self-hosted Image Optimizer from being
  // abused as an open proxy (remotePatterns DoS / disk cache exhaustion).
  images: {
    remotePatterns: [],
    // Cap per-image disk-cache TTL (seconds) to avoid unbounded cache growth
    minimumCacheTTL: 60,
    // Narrow the responsive size ladder to reduce cache permutations
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    formats: ["image/avif", "image/webp"],
  },

  // Add security headers on every response including API routes
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
