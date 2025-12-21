import Card from "@/components/Card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Laxm’s mission: premium, direction-driven, and value-focused technology advisory and innovation.",
  keywords: ["Laxm", "About", "Advisory", "IT Consulting", "Innovation"],
  openGraph: {
    images: [{ url: "/laxm_logo.png", width: 1200, height: 630 }],
  },
  twitter: {
    images: ["/laxm_logo.png"],
  },
};

export default function About() {
  return (
    <section className="hero-gradient text-white relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-30 pointer-events-none" />
      <div className="mx-auto max-w-4xl px-6 py-16">
        <Card variant="glass">
          <h1 className="text-3xl font-bold">About Laxm</h1>
          <p className="mt-6 text-gray-200">
            Laxm is a technology advisory and innovation company helping teams
            design strategy, build scalable platforms, and deliver AI/ML-powered
            products. We combine consulting expertise with product thinking to
            accelerate outcomes.
          </p>
        </Card>
      </div>
    </section>
  );
}
