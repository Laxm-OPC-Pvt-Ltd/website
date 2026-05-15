import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin",
  description: "Admin CMS for managing blog posts.",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
