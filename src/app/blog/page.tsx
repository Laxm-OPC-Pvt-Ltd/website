import Link from "next/link";
import { posts } from "@/data/posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights on strategy, technology, and innovation.",
  keywords: [
    "Blog",
    "Strategy",
    "Technology",
    "Innovation",
    "AI",
    "ML",
    "Laxm",
  ],
  openGraph: {
    images: [{ url: "/laxm_logo.png", width: 1200, height: 630 }],
  },
  twitter: {
    images: ["/laxm_logo.png"],
  },
};

export default function BlogIndex() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-3xl font-bold text-gradient-gold">Blog</h1>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <article key={post.slug} className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className="mt-2 text-zinc-700">{post.excerpt}</p>
            <p className="mt-4 text-xs text-zinc-500">{post.date}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="mt-4 inline-block underline"
            >
              Read more
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
