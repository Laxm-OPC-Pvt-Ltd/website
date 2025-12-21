import type { Metadata } from "next";
import Card from "@/components/Card";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore Laxm’s innovative AI/ML-based products and accelerators.",
  keywords: ["Products", "AI", "ML", "Innovation", "Accelerators"],
  openGraph: {
    images: [{ url: "/laxm_logo.png", width: 1200, height: 630 }],
  },
  twitter: {
    images: ["/laxm_logo.png"],
  },
};

export default function Products() {
  return (
    <section className="hero-gradient text-white relative overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 grid-overlay opacity-30 pointer-events-none" />
      <div className="mx-auto max-w-5xl px-6 py-24 w-full">
        <h1 className="text-3xl font-bold text-gradient-gold">Products</h1>
        <p className="mt-4 text-gray-200">
          We build innovative AI/ML-based products and accelerators to kickstart
          your initiatives.
        </p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <Card title="Insight AI" variant="glass">
            Knowledge discovery and summarization for teams.
          </Card>
          <Card title="Ops Assist" variant="glass">
            Developer productivity and automation tooling.
          </Card>
          <Card title="Vision ML" variant="glass">
            Computer vision templates for rapid prototyping.
          </Card>
        </div>
      </div>
    </section>
  );
}
