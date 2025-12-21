import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Logo from "@/components/Logo";
import LinkedInIcon from "@/components/icons/LinkedIn";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.laxm.example"),
  title: {
    default: "Laxm — Advisory, IT Consulting, Innovation, Custom Solutions",
    template: "%s | Laxm",
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
    url: "https://www.laxm.example",
    siteName: "Laxm",
    locale: "en_US",
    type: "website",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${inter.variable} antialiased`}>
        <header className="border-b bg-[#0B1F33] shadow-md">
          <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between text-white">
            <Link href="/" className="flex items-center gap-3">
              <Logo size={32} alt="Laxm logo" />
              <span className="text-xl font-semibold">Laxm</span>
            </Link>
            <nav className="flex gap-8 text-sm font-medium">
              <Link href="/about" className="hover:text-gold transition-colors">
                About
              </Link>
              <Link
                href="/services"
                className="hover:text-gold transition-colors"
              >
                Services
              </Link>
              <Link
                href="/products"
                className="hover:text-gold transition-colors"
              >
                Products
              </Link>
              <Link href="/blog" className="hover:text-gold transition-colors">
                Blog
              </Link>
              <Link
                href="/contact"
                className="hover:text-gold transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>
        </header>
        <main className="min-h-[calc(100vh-160px)]">{children}</main>
        <section className="border-t bg-[#0B1F33] shadow-inner">
          <div className="mx-auto max-w-7xl px-6 py-12 grid gap-8 md:grid-cols-4 text-[#C9CDD6]">
            <div>
              <div className="flex items-center gap-3">
                <Logo size={36} alt="Laxm logo" />
                <span className="text-lg font-semibold text-white">Laxm</span>
              </div>
              <p className="mt-3 text-sm">Multiple paths → One clear aim</p>
              <p className="mt-1 text-sm">
                Premium. Direction‑driven. Value‑focused.
              </p>
              <div className="mt-4">
                <a
                  href="https://www.linkedin.com/company/thelaxm"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Laxm on LinkedIn"
                  className="inline-flex items-center justify-center text-[#C9CDD6] hover:text-gold transition-colors"
                >
                  <LinkedInIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div>
              <p className="text-white font-semibold">Menu</p>
              <ul className="mt-3 grid gap-2 text-sm">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-gold transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="hover:text-gold transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products"
                    className="hover:text-gold transition-colors"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="hover:text-gold transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-gold transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-white font-semibold">Legal</p>
              <ul className="mt-3 grid gap-2 text-sm">
                <li>
                  <Link
                    href="/privacy-policy"
                    className="hover:text-gold transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cookie-policy"
                    className="hover:text-gold transition-colors"
                  >
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-of-service"
                    className="hover:text-gold transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-and-conditions"
                    className="hover:text-gold transition-colors"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/refund-policy"
                    className="hover:text-gold transition-colors"
                  >
                    Refund Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div></div>
          </div>
        </section>
        <footer className="border-t bg-[#0B1F33]">
          <div className="mx-auto max-w-7xl px-6 py-10 text-sm flex items-center justify-between text-[#C9CDD6]">
            <p>© {new Date().getFullYear()} Laxm. All rights reserved.</p>
            <p className="text-[#C9CDD6]">From India to the World</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
