import type { Metadata } from "next";
import { canonicalUrl, BASE_URL } from "@/lib/metadata";
import Card from "@/components/Card";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Laxm (OPC) Private Limited to discuss advisory, consulting, innovation, and custom technology solutions. Based in Hyderabad, India.",
  keywords: [
    "Laxm",
    "Laxm OPC Private Limited",
    "Contact",
    "Consulting",
    "Advisory",
    "Innovation",
    "Hyderabad",
    "India",
  ],
  openGraph: {
    title: "Contact Laxm (OPC) Private Limited",
    description:
      "Reach out to discuss advisory, consulting, innovation, and custom technology solutions. We respond within 24 hours.",
    url: canonicalUrl("/contact"),
    siteName: "Laxm",
    type: "website",
    images: [
      {
        url: "/laxm_logo.png",
        width: 1200,
        height: 630,
        alt: "Laxm (OPC) Private Limited — Technology Advisory & Innovation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Laxm (OPC) Private Limited",
    description:
      "Reach out to discuss advisory, consulting, innovation, and custom technology solutions. We respond within 24 hours.",
    images: ["/laxm_logo.png"],
  },
  alternates: {
    canonical: canonicalUrl("/contact"),
  },
};

export default function Contact() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${BASE_URL}/contact`,
    name: "Contact Laxm (OPC) Private Limited",
    url: `${BASE_URL}/contact`,
    description:
      "Contact Laxm (OPC) Private Limited to discuss advisory, consulting, innovation, and custom technology solutions.",
    isPartOf: { "@id": `${BASE_URL}/#website` },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Contact", item: `${BASE_URL}/contact` },
      ],
    },
    mainEntity: {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "Laxm (OPC) Private Limited",
      address: {
        "@type": "PostalAddress",
        streetAddress: "WeWork Rajapushpa Summit, Nanakramguda, Financial District",
        addressLocality: "Hyderabad",
        addressRegion: "Telangana",
        postalCode: "500032",
        addressCountry: "IN",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-[var(--navy)] relative overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Context & Info */}
          <div className="space-y-8 fade-in-up">
            <div>
              <h2 className="text-[var(--gold)] font-semibold tracking-wider uppercase mb-4 text-sm">
                Get in Touch
              </h2>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Let's Build <br />
                <span className="text-gradient-gold">Something Great.</span>
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                Whether you're looking to accelerate your AI initiatives,
                optimize your operations, or build a custom solution, we're here
                to help you achieve your vision.
              </p>
            </div>

            <div className="space-y-6 pt-8 border-t border-white/10">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-white/5 text-[var(--gold)]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">
                    Global HQ
                  </h3>
                  <h4 className="text-gray-400 mt-1">Laxm (OPC) Private Limited</h4>
                  <p className="text-gray-400 mt-1">
                    WeWork Rajapushpa Summit, Nanakramguda, Financial District
                  </p>
                  <p className="text-gray-400 mt-1">
                    Hyderabad, Bharat. 500032
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="fade-in-up delay-100">
            <Card
              variant="glass-dark"
              className="border-white/10 shadow-2xl shadow-black/30 backdrop-blur-xl"
            >
              <h3 className="text-2xl font-bold text-white mb-2">
                Send us a message
              </h3>
              <p className="text-sm text-gray-400 mb-6">
                We usually respond within 24 hours.
              </p>
              <ContactForm />
            </Card>
          </div>
        </div>
      </div>
    </main>
    </>
  );
}
