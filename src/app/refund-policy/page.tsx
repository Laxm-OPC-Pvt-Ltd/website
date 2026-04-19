import type { Metadata } from "next";
import { canonicalUrl } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Refund Policy",
  description:
    "Laxm (OPC) Private Limited refund policy including free trial, general no-refund stance, exceptions, and processing timelines.",
  keywords: ["Refund Policy", "Free Trial", "Refunds", "Payments", "Laxm"],
  openGraph: { images: [{ url: "/laxm_logo.png", width: 1200, height: 630 }] },
  twitter: { images: ["/laxm_logo.png"] },
  alternates: {
    canonical: canonicalUrl("/refund-policy"),
  },
};

export default function RefundPolicy() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-bold">Refund Policy</h1>
      <p className="mt-4 text-zinc-700">Effective date: 21 Dec 2025</p>
      <p className="mt-4 text-zinc-700">
        This Refund Policy describes how Laxm (OPC) Private Limited (“Laxm”)
        handles refunds for technology products and services.
      </p>
      <h2 className="mt-8 text-xl font-semibold">Free Trial</h2>
      <p className="mt-2 text-zinc-700">
        Most products offer a free first 14 days of usage. You can evaluate the
        product during this period at no cost. Billing begins after the trial
        unless cancelled before it ends.
      </p>
      <h2 className="mt-8 text-xl font-semibold">General No-Refund Policy</h2>
      <p className="mt-2 text-zinc-700">
        As a general policy, payments are non-refundable due to the nature of
        digital services and immediate value provision.
      </p>
      <h2 className="mt-8 text-xl font-semibold">Exceptions</h2>
      <p className="mt-2 text-zinc-700">
        In certain cases, at our discretion, we may issue a refund if requested
        within 7 days of payment. Approved refunds are typically processed
        within 3–5 business days. Bank or payment provider times may vary.
      </p>
      <h2 className="mt-8 text-xl font-semibold">How to Request a Refund</h2>
      <p className="mt-2 text-zinc-700">
        Email{" "}
        <a className="underline" href="mailto:ask@thelaxm.com">
          ask@thelaxm.com
        </a>{" "}
        with your account details, transaction ID, and reason for request.
      </p>
      <h2 className="mt-8 text-xl font-semibold">No Shipping</h2>
      <p className="mt-2 text-zinc-700">
        Our products and services are delivered digitally. No shipping applies.
      </p>
      <h2 className="mt-8 text-xl font-semibold">Changes</h2>
      <p className="mt-2 text-zinc-700">
        We may update this Refund Policy. Material changes will be indicated by
        a revised effective date.
      </p>
      <h2 className="mt-8 text-xl font-semibold">Contact</h2>
      <p className="mt-2 text-zinc-700">
        For refund questions, contact{" "}
        <a className="underline" href="mailto:ask@thelaxm.com">
          ask@thelaxm.com
        </a>
        .
      </p>
    </section>
  );
}
