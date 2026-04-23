import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Link from "next/link";
import Logo from "@/components/Logo";
import LinkedInIcon from "@/components/icons/LinkedIn";
import { canonicalUrl } from "@/lib/metadata";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.thelaxm.com"),
  title: {
    default: "LAXM — Advisory, IT Consulting, Innovation, Custom Solutions",
    template: "%s | LAXM",
  },
  description:
    "Laxm provides advisory, IT consulting, innovation in AI/ML, and custom solutions. Rich, responsive, and scalable digital experiences.",
  keywords: [
    "Laxm",
    "Advisory",
    "IT Consulting",
    "Innovation",
    "AI",
    "ML",
    "Custom Solutions",
    "Next.js",
  ],
  openGraph: {
    title: "Laxm — Advisory, IT Consulting, Innovation, Custom Solutions",
    description:
      "Trusted partner for strategy, technology, and innovation. Explore our services, products, and insights.",
    url: "https://www.thelaxm.com",
    siteName: "Laxm",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: canonicalUrl("/"),
  },
  twitter: {
    card: "summary_large_image",
    title: "Laxm",
    description:
      "Advisory, IT Consulting, Innovation (AI/ML) and Custom Solutions.",
    creator: "@laxm",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/laxm_logo.png",
    shortcut: "/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.thelaxm.com/#organization",
  name: "Laxm (OPC) Private Limited",
  alternateName: ["Laxm", "Lakshyam"],
  url: "https://www.thelaxm.com",
  logo: {
    "@type": "ImageObject",
    url: "https://www.thelaxm.com/laxm_logo.png",
    width: 512,
    height: 512,
  },
  description:
    "Laxm is a strategy, advisory, and technology consulting firm focused on turning ideas into execution. We help organizations define clear aims (Lakshyam), build practical strategies, and deliver measurable outcomes.",
  sameAs: [
    "https://www.linkedin.com/company/thelaxm/",
    "https://rameshwaramancha.com",
  ],
  founder: {
    "@type": "Person",
    name: "Ram Amancha",
    url: "https://rameshwaramancha.com",
    jobTitle: "Founder",
    sameAs: ["https://www.linkedin.com/in/ram-amancha/"],
  },
  knowsAbout: [
    "Business Strategy",
    "Execution Frameworks",
    "IT Consulting",
    "Digital Transformation",
    "Innovation Management",
    "Startup Advisory",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    areaServed: "Worldwide",
    availableLanguage: ["English"],
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "WeWork Rajapushpa Summit, Nanakramguda, Financial District",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    postalCode: "500032",
    addressCountry: "IN",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.thelaxm.com/#website",
  name: "Laxm",
  url: "https://www.thelaxm.com",
  publisher: { "@id": "https://www.thelaxm.com/#organization" },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://www.thelaxm.com/api/faqs/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
  inLanguage: "en-US",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-M4692SPDS7"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-M4692SPDS7');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body
        className={`${poppins.variable} ${inter.variable} antialiased bg-[var(--background)] text-[var(--foreground)]`}
      >
        {/* Sticky Header - Deep Navy & Gold */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--navy)]/95 backdrop-blur-md border-b border-white/5 transition-all shadow-lg shadow-black/20">
          <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
            {/* Logo Area */}
            <Link href="/" className="flex items-center gap-3 group">
              <Logo
                size={40}
                alt="Laxm logo"
                className="transition-transform group-hover:scale-105 drop-shadow-md"
              />
              <span className="text-2xl font-bold tracking-tight text-white group-hover:text-[var(--gold)] transition-colors">
                LAXM
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex gap-10 text-sm font-semibold tracking-wide text-white">
              <Link
                href="/about"
                className="hover:text-[var(--gold)] transition-all relative group py-2"
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--gold)] transition-all duration-300 group-hover:w-full box-shadow-gold"></span>
              </Link>
              <Link
                href="/services"
                className="hover:text-[var(--gold)] transition-all relative group py-2"
              >
                Services
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--gold)] transition-all duration-300 group-hover:w-full box-shadow-gold"></span>
              </Link>
              <Link
                href="/products"
                className="hover:text-[var(--gold)] transition-all relative group py-2"
              >
                Products
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--gold)] transition-all duration-300 group-hover:w-full box-shadow-gold"></span>
              </Link>
              <Link
                href="/blog"
                className="hover:text-[var(--gold)] transition-all relative group py-2"
              >
                Insights
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--gold)] transition-all duration-300 group-hover:w-full box-shadow-gold"></span>
              </Link>
            </nav>

            {/* CTA */}
            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="hidden md:inline-flex px-6 py-2.5 rounded-full text-sm font-bold bg-gradient-to-r from-[var(--gold)] to-[var(--gold-dark)] text-white shadow-lg shadow-[var(--gold)]/20 hover:shadow-[var(--gold)]/40 hover:scale-105 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="min-h-screen pt-20">{children}</main>

        {/* Footer - Deep Navy */}
        <section className="bg-[var(--navy)] border-t border-white/5 relative overflow-hidden">
          {/* Subtle background pattern for footer */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(212,175,55,0.05),_transparent_40%)] pointer-events-none"></div>

          <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-4 text-white/80 relative z-10">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Logo size={40} alt="Laxm logo" />
                <span className="text-2xl font-bold text-white">Laxm</span>
              </div>
              <p className="text-sm leading-relaxed max-w-xs text-white/70">
                Premium. Direction‑driven. Value‑focused.
                <br />
                Turning ambition into measurable impact.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/company/thelaxm"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Laxm on LinkedIn"
                  className="p-2 rounded-full bg-white/5 hover:bg-[var(--gold)] hover:text-[var(--navy)] transition-all"
                >
                  <LinkedInIcon className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <p className="text-white font-bold mb-6 text-lg">Company</p>
              <ul className="space-y-3 text-sm font-medium">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-[var(--gold)] transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-[var(--gold)] opacity-0 hover:opacity-100 transition-opacity"></span>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="hover:text-[var(--gold)] transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-[var(--gold)] opacity-0 hover:opacity-100 transition-opacity"></span>
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products"
                    className="hover:text-[var(--gold)] transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-[var(--gold)] opacity-0 hover:opacity-100 transition-opacity"></span>
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="hover:text-[var(--gold)] transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-[var(--gold)] opacity-0 hover:opacity-100 transition-opacity"></span>
                    Insights
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-[var(--gold)] transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-[var(--gold)] opacity-0 hover:opacity-100 transition-opacity"></span>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-white font-bold mb-6 text-lg">Legal</p>
              <ul className="space-y-3 text-sm font-medium">
                <li>
                  <Link
                    href="/privacy-policy"
                    className="hover:text-[var(--gold)] transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cookie-policy"
                    className="hover:text-[var(--gold)] transition-colors"
                  >
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-of-service"
                    className="hover:text-[var(--gold)] transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-and-conditions"
                    className="hover:text-[var(--gold)] transition-colors"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/refund-policy"
                    className="hover:text-[var(--gold)] transition-colors"
                  >
                    Refund Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-white font-bold mb-6 text-lg">Stay Updated</p>
              <p className="text-sm mb-4 text-white/70">
                Subscribe to our newsletter for the latest insights.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm w-full focus:outline-none focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)] transition-all placeholder:text-white/30 text-white"
                />
                <button className="bg-[var(--gold)] text-[var(--navy)] px-4 py-2.5 rounded-lg text-sm font-bold hover:brightness-110 transition-all shadow-lg shadow-[var(--gold)]/20">
                  Go
                </button>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-[#01040f] border-t border-white/5">
          <div className="mx-auto max-w-7xl px-6 py-8 text-xs font-medium text-white/40 flex flex-col md:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} Laxm (OPC) Private Limited. All rights reserved.</p>
            <p>Designed with precision. From India to the World.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
