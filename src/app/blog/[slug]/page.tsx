import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { posts } from "@/data/posts";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} - Laxm Healthcare Blog`,
    description: post.excerpt,
    keywords: [post.category, ...(post.tags || [])],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return notFound();

  const relatedPosts = posts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Header */}
      <section className="relative overflow-hidden pt-24 pb-12 px-6 border-b border-slate-700">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm text-[var(--gold)] mb-6 hover:text-yellow-400 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Blog
          </Link>

          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-[var(--gold)]/10 text-[var(--gold)] text-xs font-semibold rounded-full">
              {post.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>

          <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-3xl">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 pb-8 border-b border-slate-700">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-[var(--gold)]">
                L
              </div>
              <div>
                <p className="font-semibold text-white">{post.author}</p>
                <time dateTime={post.date} className="text-gray-500">
                  {post.date}
                </time>
              </div>
            </div>
            <span>•</span>
            <span>{post.readingTime} min read</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-invert max-w-none text-white
            prose-headings:text-white prose-headings:font-bold prose-headings:mt-8 prose-headings:mb-4
            prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
            prose-a:text-[var(--gold)] prose-a:no-underline hover:prose-a:text-yellow-400 hover:prose-a:underline
            prose-strong:text-white
            prose-li:text-gray-300
            prose-li:marker:text-[var(--gold)]
            prose-code:text-[var(--gold)] prose-code:bg-slate-800/50 prose-code:px-2 prose-code:py-1 prose-code:rounded
            prose-blockquote:border-l-[var(--gold)] prose-blockquote:bg-slate-800/30 prose-blockquote:py-3 prose-blockquote:px-4 prose-blockquote:not-italic prose-blockquote:text-gray-200
            prose-pre:bg-slate-800 prose-pre:border prose-pre:border-slate-700
            prose-hr:border-slate-700
          "
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-slate-700">
              <p className="text-sm text-gray-400 mb-4 font-semibold">Tags:</p>
              <div className="flex flex-wrap gap-3">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block px-4 py-2 bg-slate-800 text-gray-300 text-sm rounded-full hover:bg-slate-700 transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-12 px-6 border-y border-slate-700">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Need expert guidance?
            </h3>
            <p className="text-gray-300 mb-6">
              Let's discuss how these strategies apply to your organization.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-[var(--gold)] text-white font-semibold rounded-lg hover:bg-yellow-400 transition-colors"
            >
              Get in Touch →
            </Link>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link href={`/blog/${relatedPost.slug}`} key={relatedPost.slug}>
                  <div className="group h-full bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden hover:border-[var(--gold)] hover:bg-slate-800 transition-all duration-300 cursor-pointer">
                    <div className="p-6 h-full flex flex-col">
                      <span className="inline-block px-2 py-1 bg-[var(--gold)]/10 text-[var(--gold)] text-xs font-semibold rounded mb-3 w-fit">
                        {relatedPost.category}
                      </span>
                      <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[var(--gold)] transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4 flex-grow line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                        <span className="text-xs text-gray-500">{relatedPost.readingTime}m</span>
                        <span className="text-[var(--gold)] group-hover:translate-x-1 transition-transform">→</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
