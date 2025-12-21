import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin",
  description: "Client-side admin for managing blog content locally.",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
