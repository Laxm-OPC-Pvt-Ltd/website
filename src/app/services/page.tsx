import type { Metadata } from "next";
import Card from "@/components/Card";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Advisory, IT consulting, innovation (AI/ML), and custom solutions tailored to your goals.",
  keywords: [
    "Services",
    "Advisory",
    "IT Consulting",
    "Innovation",
    "Custom Solutions",
  ],
  openGraph: {
    images: [{ url: "/laxm_logo.png", width: 1200, height: 630 }],
  },
  twitter: {
    images: ["/laxm_logo.png"],
  },
};

export default function Services() {
  return (
    <section className="hero-gradient text-white relative overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 grid-overlay opacity-30 pointer-events-none" />
      <div className="mx-auto max-w-5xl px-6 py-24 w-full">
        <h1 className="text-3xl font-bold text-gradient-gold">Services</h1>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <Card title="Advisory" variant="glass">
            Strategy, architecture, roadmaps, and transformation leadership.
          </Card>
          <Card title="IT Consulting" variant="glass">
            Cloud, DevOps, platform engineering, and modernization.
          </Card>
          <Card title="Innovation" variant="glass">
            AI/ML product discovery, prototyping, and delivery.
          </Card>
          <Card title="Custom Solutions" variant="glass">
            Bespoke applications, integrations, and end-to-end systems.
          </Card>
        </div>
      </div>
    </section>
  );
}
