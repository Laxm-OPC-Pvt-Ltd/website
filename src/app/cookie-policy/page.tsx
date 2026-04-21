import type { Metadata } from "next";
import { canonicalUrl } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Laxm cookie policy: essential cookies and preferences for non-essential cookies.",
  keywords: ["Cookie", "Policy", "Laxm"],
  openGraph: {
    images: [{ url: "/laxm_logo.png", width: 1200, height: 630 }],
  },
  twitter: {
    images: ["/laxm_logo.png"],
  },
  alternates: {
    canonical: canonicalUrl("/cookie-policy"),
  },
};

export default function CookiePolicy() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
       <h1 className="text-3xl font-bold">Cookie Policy</h1>
       <p className="mt-4 text-zinc-700">
         Effective date: <time dateTime="2025-12-21">21 Dec 2025</time>
       </p>
      <p className="mt-4 text-zinc-700">
        This Cookie Policy explains how Laxm (OPC) Private Limited (“Laxm”,
        “we”) uses cookies and similar technologies on our website.
      </p>
      <h2 className="mt-8 text-xl font-semibold">What Are Cookies?</h2>
      <p className="mt-2 text-zinc-700">
        Cookies are small text files placed on your device to help websites
        function and improve the user experience.
      </p>
      <h2 className="mt-8 text-xl font-semibold">Types of Cookies We Use</h2>
      <ul className="mt-2 list-disc pl-6 text-zinc-700">
        <li>
          Strictly Necessary Cookies: required for basic site functionality,
          performance, and security.
        </li>
        <li>
          No Marketing/Tracking Cookies: we do not use advertising or
          non-essential tracking cookies.
        </li>
        <li>
          No Third-Party Analytics: we do not share data with third parties for
          analytics or marketing.
        </li>
      </ul>
      <h2 className="mt-8 text-xl font-semibold">Managing Cookies</h2>
      <p className="mt-2 text-zinc-700">
        You can set your browser to block or alert you about cookies. Some
        features may not work without strictly necessary cookies.
      </p>
      <h2 className="mt-8 text-xl font-semibold">Do Not Track</h2>
      <p className="mt-2 text-zinc-700">
        Our site respects privacy by limiting cookie use to essentials. Browser
        “Do Not Track” signals may not be consistently recognized across all
        services.
      </p>
      <h2 className="mt-8 text-xl font-semibold">Updates</h2>
      <p className="mt-2 text-zinc-700">
        We may update this policy and will indicate changes with a revised
        effective date.
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
