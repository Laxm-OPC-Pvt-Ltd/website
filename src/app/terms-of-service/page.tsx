import type { Metadata } from "next";
import { canonicalUrl } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Laxm terms of service: acceptable use, limitations of liability, and service approach.",
  keywords: ["Terms", "Service", "Laxm"],
  openGraph: {
    images: [{ url: "/laxm_logo.png", width: 1200, height: 630 }],
  },
  twitter: {
    images: ["/laxm_logo.png"],
  },
  alternates: {
    canonical: canonicalUrl("/terms-of-service"),
  },
};

export default function TermsOfService() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
       <h1 className="text-3xl font-bold">Terms of Service</h1>
       <p className="mt-4 text-zinc-700">Effective date: <time dateTime="2025-12-21">21 Dec 2025</time></p>
      <p className="mt-4 text-zinc-700">
        These Terms govern your use of the website operated by Laxm (OPC)
        Private Limited (“Laxm”, “we”, “our”, “us”). By accessing or using the
        site, you agree to these Terms.
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
      <h2 className="mt-8 text-xl font-semibold">Use of the Site</h2>
      <ul className="mt-2 list-disc pl-6 text-zinc-700">
        <li>You must use the site in a lawful manner.</li>
        <li>
          You must not attempt to disrupt, interfere, or gain unauthorized
          access.
        </li>
        <li>
          Content is for informational purposes and does not constitute
          professional advice.
        </li>
      </ul>
      <h2 className="mt-8 text-xl font-semibold">Intellectual Property</h2>
      <p className="mt-2 text-zinc-700">
        The site and its content are protected by intellectual property laws.
        You may not copy, modify, or distribute content without prior written
        consent.
      </p>
      <h2 className="mt-8 text-xl font-semibold">Third-Party Links</h2>
      <p className="mt-2 text-zinc-700">
        The site may contain links to third-party websites. We are not
        responsible for their content, policies, or practices.
      </p>
      <h2 className="mt-8 text-xl font-semibold">Disclaimer</h2>
      <p className="mt-2 text-zinc-700">
        The site is provided on an “as is” and “as available” basis. To the
        maximum extent permitted by law, we disclaim warranties of any kind
        regarding the site and its content.
      </p>
      <h2 className="mt-8 text-xl font-semibold">Limitation of Liability</h2>
      <p className="mt-2 text-zinc-700">
        To the maximum extent permitted by law, Laxm shall not be liable for
        indirect, incidental, special, consequential, or punitive damages, or
        any loss of profits, revenue, data, or use arising from your use of the
        site.
      </p>
      <h2 className="mt-8 text-xl font-semibold">Indemnification</h2>
      <p className="mt-2 text-zinc-700">
        You agree to indemnify and hold Laxm harmless from any claims,
        liabilities, damages, losses, and expenses arising from your use of the
        site or violation of these Terms.
      </p>
      <h2 className="mt-8 text-xl font-semibold">Termination</h2>
      <p className="mt-2 text-zinc-700">
        We may limit or terminate access to the site at any time, with or
        without notice, for conduct that we believe violates the law or is
        harmful.
      </p>
       <h2 className="mt-8 text-xl font-semibold">Governing Law</h2>
       <p className="mt-2 text-zinc-700">
         These Terms are governed by the laws of <cite><a href="https://www.indiacode.nic.in/" target="_blank" rel="noopener" data-source="https://www.indiacode.nic.in/">India</a></cite>. You agree that the courts
         located in Hyderabad, Telangana, India shall have exclusive jurisdiction
         over any disputes.
       </p>
      <h2 className="mt-8 text-xl font-semibold">Changes to These Terms</h2>
      <p className="mt-2 text-zinc-700">
        We may update these Terms from time to time. Material changes will be
        indicated with a revised effective date. Continued use of the site
        signifies acceptance of the updated Terms.
      </p>
       <h2 className="mt-8 text-xl font-semibold">Contact</h2>
       <p className="mt-2 text-zinc-700">
         For questions regarding these Terms, contact{" "}
         <a className="underline" href="mailto:ask@thelaxm.com">
           ask@thelaxm.com
         </a>
         .
       </p>

       {/* References Section */}
       <h2 className="mt-12 text-xl font-semibold">References</h2>
       <ul className="mt-2 list-disc pl-6 text-zinc-700">
         <li>
           Information Technology Act, 2000 and rules made thereunder.{" "}
           <cite>
             <a
               href="https://www.indiacode.nic.in/"
               target="_blank"
               rel="noopener"
               data-source="https://www.indiacode.nic.in/"
             >
               India Code (official government portal)
             </a>
           </cite>
           .
         </li>
       </ul>
     </section>
  );
}
