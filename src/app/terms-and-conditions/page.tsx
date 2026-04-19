import type { Metadata } from "next";
import { canonicalUrl } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Laxm (OPC) Private Limited terms and conditions for website use, subscriptions, billing, free trial, cancellations, and refund exceptions.",
  keywords: [
    "Terms and Conditions",
    "Subscriptions",
    "Billing",
    "Refunds",
    "Laxm",
  ],
  openGraph: { images: [{ url: "/laxm_logo.png", width: 1200, height: 630 }] },
  twitter: { images: ["/laxm_logo.png"] },
  alternates: {
    canonical: canonicalUrl("/terms-and-conditions"),
  },
};

export default function TermsAndConditions() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-bold">Terms and Conditions</h1>
      <p className="mt-4 text-zinc-700">Effective date: 21 Dec 2025</p>
      <p className="mt-4 text-zinc-700">
        These Terms and Conditions (“Terms”) apply to use of our website and
        purchase or subscription to our technology products and services
        operated by Laxm (OPC) Private Limited (“Laxm”, “we”, “our”, “us”).
      </p>
      <h2 className="mt-8 text-xl font-semibold">Company Details</h2>
      <p className="mt-2 text-zinc-700">
        Laxm (OPC) Private Limited
        <br />
        WeWork, Nanakramguda, Financial District, Hyderabad, Telangana, India,
        500032
        <br />
        Contact:{" "}
        <a className="underline" href="mailto:ask@thelaxm.com">
          ask@thelaxm.com
        </a>
      </p>
      <h2 className="mt-8 text-xl font-semibold">Eligibility and Accounts</h2>
      <ul className="mt-2 list-disc pl-6 text-zinc-700">
        <li>You must be legally capable of entering contracts.</li>
        <li>
          You are responsible for maintaining account security and accuracy.
        </li>
      </ul>
      <h2 className="mt-8 text-xl font-semibold">Free Trial</h2>
      <p className="mt-2 text-zinc-700">
        Most products include a free first 14 days of usage. After the trial,
        standard billing applies unless cancelled before the trial ends.
      </p>
      <h2 className="mt-8 text-xl font-semibold">Subscriptions and Billing</h2>
      <ul className="mt-2 list-disc pl-6 text-zinc-700">
        <li>Fees are disclosed at checkout or order agreement.</li>
        <li>Taxes may apply based on jurisdiction.</li>
        <li>Recurring subscriptions renew unless cancelled.</li>
      </ul>
      <h2 className="mt-8 text-xl font-semibold">Cancellation</h2>
      <p className="mt-2 text-zinc-700">
        You may cancel at any time. Access continues until the end of the
        current billing cycle unless stated otherwise.
      </p>
      <h2 className="mt-8 text-xl font-semibold">Refunds</h2>
      <p className="mt-2 text-zinc-700">
        Generally, no refunds are offered. In certain cases, refunds may be
        issued if requested within 7 days of payment. Refunds typically take 3–5
        business days to process once approved. See our Refund Policy for
        details.
      </p>
      <h2 className="mt-8 text-xl font-semibold">No Shipping</h2>
      <p className="mt-2 text-zinc-700">
        Our offerings are technology products and services delivered digitally.
        No physical shipping applies.
      </p>
      <h2 className="mt-8 text-xl font-semibold">Service Availability</h2>
      <p className="mt-2 text-zinc-700">
        We strive to provide highly available services but do not guarantee
        uninterrupted or error-free operation.
      </p>
      <h2 className="mt-8 text-xl font-semibold">Acceptable Use</h2>
      <ul className="mt-2 list-disc pl-6 text-zinc-700">
        <li>No unlawful, harmful, or abusive activities.</li>
        <li>
          No attempts to disrupt, reverse engineer, or gain unauthorized access.
        </li>
      </ul>
      <h2 className="mt-8 text-xl font-semibold">Intellectual Property</h2>
      <p className="mt-2 text-zinc-700">
        All content, software, and materials are owned or licensed by Laxm and
        protected by law. No reproduction or derivative works without
        permission.
      </p>
      <h2 className="mt-8 text-xl font-semibold">Limitation of Liability</h2>
      <p className="mt-2 text-zinc-700">
        To the maximum extent permitted by law, Laxm is not liable for indirect
        or consequential damages, including loss of profits, data, or business
        interruption.
      </p>
      <h2 className="mt-8 text-xl font-semibold">Governing Law</h2>
      <p className="mt-2 text-zinc-700">
        These Terms are governed by the laws of India. Courts in Hyderabad,
        Telangana, India have exclusive jurisdiction.
      </p>
      <h2 className="mt-8 text-xl font-semibold">Changes</h2>
      <p className="mt-2 text-zinc-700">
        We may update these Terms with a revised effective date. Continued use
        indicates acceptance.
      </p>
      <h2 className="mt-8 text-xl font-semibold">Contact</h2>
      <p className="mt-2 text-zinc-700">
        For questions, contact{" "}
        <a className="underline" href="mailto:ask@thelaxm.com">
          ask@thelaxm.com
        </a>
        .
      </p>
    </section>
  );
}
