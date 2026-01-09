import Link from "next/link";
import { posts } from "@/data/posts";
import type { Metadata } from "next";
import Card from "@/components/Card";

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
    <main className="min-h-screen bg-[var(--ivory)]">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden hero-gradient">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight fade-in-up">
            Latest <span className="text-gradient-gold">Insights</span>
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto fade-in-up delay-100">
            Thoughts on technology, strategy, and the future of digital
            business.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Card
                key={post.slug}
                variant="solid"
                className="h-full hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[var(--gold)]">
                    {post.date}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-[var(--navy)] mb-3 leading-tight group-hover:text-[var(--gold)] transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-[var(--navy)]/70 mb-6 flex-grow line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-sm font-semibold text-[var(--navy)] hover:text-[var(--gold)] transition-colors"
                  >
                    Read Article
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
