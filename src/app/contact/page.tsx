import type { Metadata } from "next";
import Card from "@/components/Card";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Laxm to discuss advisory, consulting, innovation and custom solution needs.",
  keywords: ["Laxm", "Contact", "Consulting", "Advisory", "Innovation"],
  openGraph: {
    images: [{ url: "/laxm_logo.png", width: 1200, height: 630 }],
  },
  twitter: {
    images: ["/laxm_logo.png"],
  },
};

export default function Contact() {
  return (
    <section className="hero-gradient text-white relative overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 grid-overlay opacity-30 pointer-events-none" />
      <div className="mx-auto max-w-4xl px-6 py-24 w-full">
        <Card variant="glass">
          <h1 className="text-3xl font-bold text-gradient-gold">Contact</h1>
          <p className="mt-4 text-gray-200">
            Reach out to discuss your goals and how we can help.
          </p>
          <ContactForm />
        </Card>
      </div>
    </section>
  );
}
