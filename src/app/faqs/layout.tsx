import type { Metadata } from "next";
import { canonicalUrl } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "FAQs - Laxm",
  description:
    "Frequently asked questions about Laxm's advisory, IT consulting, innovation, and custom solutions services.",
  keywords: ["FAQ", "frequently asked questions", "Laxm", "consulting"],
  alternates: {
    canonical: canonicalUrl("/faqs"),
  },
};

export default function FAQsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}