import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Laxm",
    short_name: "Laxm",
    description:
      "Premium, direction-driven, value-focused advisory, consulting, innovation and custom solutions.",
    start_url: "/",
    display: "standalone",
    background_color: "#F7F6F2",
    theme_color: "#0B1F33",
    icons: [
      {
        src: "/laxm_logo.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/laxm_logo.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
