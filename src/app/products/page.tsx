import type { Metadata } from "next";
import Card from "@/components/Card";
import CTAButton from "@/components/CTAButton";

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

const products = [
  {
    title: "Insight AI",
    description:
      "Advanced knowledge discovery engine that transforms unstructured data into actionable strategic insights using state-of-the-art NLP.",
    features: [
      "Document Summarization",
      "Sentiment Analysis",
      "Trend Forecasting",
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-[var(--gold)]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
  },
  {
    title: "Ops Assist",
    description:
      "Intelligent automation suite for DevOps teams, reducing manual toil and predicting infrastructure bottlenecks before they occur.",
    features: [
      "Auto-Remediation",
      "Log Anomaly Detection",
      "Capacity Planning",
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-[var(--gold)]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    title: "Vision ML",
    description:
      "Pre-trained computer vision models and templates designed for rapid prototyping in retail, security, and manufacturing.",
    features: ["Object Detection", "Facial Recognition", "Quality Control"],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-[var(--gold)]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      </svg>
    ),
  },
];

export default function Products() {
  return (
    <main className="min-h-screen bg-[var(--ivory)]">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden hero-gradient">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight fade-in-up">
            Our <span className="text-gradient-gold">Products</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto fade-in-up delay-100">
            Accelerating digital transformation with cutting-edge AI/ML
            accelerators and intelligent tools.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card
                key={index}
                title={product.title}
                variant="solid"
                className="h-full hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="mb-6">{product.icon}</div>
                <p className="text-[var(--navy)]/80 mb-6 leading-relaxed">
                  {product.description}
                </p>
                <ul className="space-y-2 mb-8">
                  {product.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-[var(--navy)]/70"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <CTAButton
                    href="/contact"
                    variant="primary"
                    className="w-full text-center justify-center"
                  >
                    Learn More
                  </CTAButton>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[var(--navy)] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to{" "}
            <span className="text-[var(--gold)]">Build the Future?</span>
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Let's discuss how our products can accelerate your roadmap.
          </p>
          <CTAButton href="/contact" variant="outline">
            Request a Demo
          </CTAButton>
        </div>
      </section>
    </main>
  );
}
