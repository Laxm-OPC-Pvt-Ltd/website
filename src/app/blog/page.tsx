import Link from "next/link";
import { posts } from "@/data/posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Healthcare Blog - Laxm",
  description:
    "Expert insights on digital transformation, AI/ML, healthcare technology, and operational excellence.",
  keywords: [
    "healthcare blog",
    "digital transformation",
    "healthcare technology",
    "AI in healthcare",
    "EHR",
    "patient experience",
  ],
};

export default function BlogIndex() {
  const featuredPosts = posts.filter((post) => post.featured);
  const regularPosts = posts.filter((post) => !post.featured);
  const categories = Array.from(new Set(posts.map((p) => p.category)));

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-16 px-6">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
              Healthcare Technology <span className="text-[var(--gold)]">Insights</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expert perspectives on digital transformation, AI/ML applications, cybersecurity, and operational excellence in healthcare.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button className="px-6 py-2 bg-[var(--gold)] text-black rounded-full font-semibold hover:bg-yellow-400 transition-colors">
              All Articles
            </button>
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 bg-slate-800 text-gray-200 rounded-full hover:bg-slate-700 transition-colors border border-slate-700"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      {featuredPosts.length > 0 && (
        <section className="py-16 px-6">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-white mb-12">Featured Articles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Link href={`/blog/${post.slug}`} key={post.slug}>
                  <div className="group h-full bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-lg overflow-hidden hover:border-[var(--gold)] hover:shadow-lg hover:shadow-[var(--gold)]/20 transition-all duration-300 cursor-pointer">
                    <div className="p-8 h-full flex flex-col">
                      <div className="flex items-center justify-between mb-4">
                        <span className="inline-block px-3 py-1 bg-[var(--gold)]/10 text-[var(--gold)] text-xs font-semibold rounded-full">
                          {post.category}
                        </span>
                        <span className="text-xs text-gray-400">{post.readingTime} min read</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[var(--gold)] transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-300 mb-6 flex-grow line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-400">{post.date}</span>
                        <span className="inline-flex items-center text-[var(--gold)] group-hover:translate-x-2 transition-transform">
                          Read →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts Grid */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-white mb-12">All Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.slug}>
                <div className="group h-full bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden hover:border-[var(--gold)] hover:bg-slate-800 transition-all duration-300 cursor-pointer">
                  <div className="p-6 h-full flex flex-col">
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-block px-2 py-1 bg-[var(--gold)]/10 text-[var(--gold)] text-xs font-semibold rounded">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-400">{post.readingTime}m</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[var(--gold)] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 flex-grow line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                      <span className="text-xs text-gray-500">{post.date}</span>
                      <div className="flex gap-2">
                        {post.tags?.slice(0, 2).map((tag) => (
                          <span key={tag} className="text-xs text-gray-500 bg-slate-700/50 px-2 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 border-t border-slate-700">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Have Questions?</h2>
          <p className="text-gray-300 mb-8">
            Our AI assistant can help you find answers about healthcare transformation and technology.
          </p>
          <Link
            href="/ai-assistant"
            className="inline-flex items-center px-8 py-3 bg-[var(--gold)] text-black font-semibold rounded-lg hover:bg-yellow-400 transition-colors"
          >
            Chat with AI Assistant →
          </Link>
        </div>
      </section>
    </main>
  );
}
