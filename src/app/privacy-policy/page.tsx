import type { Metadata } from "next";
import { canonicalUrl } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Laxm privacy policy: data handling, minimal analytics, and contact for requests.",
  keywords: ["Privacy", "Policy", "Data", "Laxm"],
  openGraph: {
    images: [{ url: "/laxm_logo.png", width: 1200, height: 630 }],
  },
  twitter: {
    images: ["/laxm_logo.png"],
  },
  alternates: {
    canonical: canonicalUrl("/privacy-policy"),
  },
};

export default function PrivacyPolicy() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
       <h1 className="text-3xl font-bold">Privacy Policy</h1>
       <p className="mt-4 text-zinc-700">
         Effective date: <time dateTime="2025-12-21">21 Dec 2025</time>
       </p>
       <p className="mt-4 text-zinc-700">
         Laxm OPC Private Limited ("Laxm", "we", "our", "us") is committed to
         protecting your privacy and handling personal data in compliance with
         the General Data Protection Regulation (<cite><a href="https://gdpr-info.eu/" target="_blank" rel="noopener" data-source="https://gdpr-info.eu/">GDPR</a></cite>) and applicable laws. This
         Privacy Policy explains what data we collect, how we use it, and your
         rights.
       </p>
      <h2 className="mt-8 text-xl font-semibold">Controller Information</h2>
      <p className="mt-2 text-zinc-700">
        Laxm OPC Private Limited
        <br />
        WeWork, Nanakramguda, Financial District, Hyderabad, Telangana, India,
        500032
        <br />
        Contact:{" "}
        <a className="underline" href="mailto:ask@thelaxm.com">
          ask@thelaxm.com
        </a>
      </p>
      <h2 className="mt-8 text-xl font-semibold">Scope</h2>
      <p className="mt-2 text-zinc-700">
        This policy applies to our website and related services where we act as
        data controller. We do not sell personal data, and we do not share
        personal data with third parties except where required by law.
      </p>
      <h2 className="mt-8 text-xl font-semibold">Data We Collect</h2>
      <ul className="mt-2 list-disc pl-6 text-zinc-700">
        <li>
          Contact details you provide (name, email, message) when you contact
          us.
        </li>
        <li>
          Basic technical information (IP address, device/browser type) strictly
          for essential security and site reliability.
        </li>
        <li>No sensitive categories of data are collected via this site.</li>
      </ul>
      <h2 className="mt-8 text-xl font-semibold">Legal Bases for Processing</h2>
      <ul className="mt-2 list-disc pl-6 text-zinc-700">
        <li>Consent: where you voluntarily submit information.</li>
        <li>
          Legitimate interests: to run a secure, reliable website and respond to
          inquiries.
        </li>
        <li>
          Legal obligations: compliance with applicable laws and lawful
          requests.
        </li>
      </ul>
      <h2 className="mt-8 text-xl font-semibold">How We Use Your Data</h2>
      <ul className="mt-2 list-disc pl-6 text-zinc-700">
        <li>Respond to your requests and provide information.</li>
        <li>Operate, protect, and improve the website.</li>
        <li>Comply with legal obligations.</li>
      </ul>
      <h2 className="mt-8 text-xl font-semibold">Data Sharing and Transfers</h2>
      <p className="mt-2 text-zinc-700">
        We do not share personal data with third parties for marketing or sales.
        We do not transfer personal data outside your jurisdiction except where
        required to provide the service or comply with law, and such transfers
        will follow GDPR safeguards.
      </p>
      <h2 className="mt-8 text-xl font-semibold">Data Retention</h2>
      <p className="mt-2 text-zinc-700">
        We retain personal data only as long as necessary for the purposes
        described or as required by law. You may request deletion at any time.
      </p>
      <h2 className="mt-8 text-xl font-semibold">Your Rights (GDPR)</h2>
      <ul className="mt-2 list-disc pl-6 text-zinc-700">
        <li>Access, rectification, and erasure.</li>
        <li>Restriction and objection to processing.</li>
        <li>Data portability.</li>
        <li>Withdraw consent at any time.</li>
        <li>Lodge a complaint with your supervisory authority.</li>
      </ul>
      <p className="mt-2 text-zinc-700">
        To exercise these rights, contact{" "}
        <a className="underline" href="mailto:ask@thelaxm.com">
          ask@thelaxm.com
        </a>
        .
      </p>
      <h2 className="mt-8 text-xl font-semibold">Cookies and Analytics</h2>
      <p className="mt-2 text-zinc-700">
        We use only essential cookies required for site functionality and
        security. See our Cookie Policy for details.
      </p>
      <h2 className="mt-8 text-xl font-semibold">Security</h2>
      <p className="mt-2 text-zinc-700">
        We implement reasonable administrative, technical, and physical
        safeguards to protect personal data. No method of transmission is fully
        secure; we strive for best-effort protection aligned with industry
        practices.
      </p>
      <h2 className="mt-8 text-xl font-semibold">Children</h2>
      <p className="mt-2 text-zinc-700">
        Our website is not directed to children under 16. We do not knowingly
        collect personal data from children.
      </p>
      <h2 className="mt-8 text-xl font-semibold">Changes to This Policy</h2>
      <p className="mt-2 text-zinc-700">
        We may update this Privacy Policy. Material changes will be indicated
        with a revised effective date. Continued use of the site signifies
        acceptance of the updated policy.
      </p>
       <h2 className="mt-8 text-xl font-semibold">Contact</h2>
       <p className="mt-2 text-zinc-700">
         For privacy questions or rights requests, contact{" "}
         <a className="underline" href="mailto:ask@thelaxm.com">
           ask@thelaxm.com
         </a>{" "}
         or write to the address above.
       </p>

       {/* References Section */}
       <h2 className="mt-12 text-xl font-semibold">References</h2>
       <ul className="mt-2 list-disc pl-6 text-zinc-700">
         <li>
           General Data Protection Regulation (GDPR).{" "}
           <cite>
             <a
               href="https://gdpr-info.eu/"
               target="_blank"
               rel="noopener"
               data-source="https://gdpr-info.eu/"
             >
               GDPR-info.eu
             </a>
           </cite>
           . Official resource for GDPR text and guidance.
         </li>
       </ul>
     </section>
  );
}
