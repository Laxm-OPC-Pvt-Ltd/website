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
    title: post.title,
    description: post.excerpt,
    openGraph: {
      images: [{ url: "/laxm_logo.png", width: 1200, height: 630 }],
    },
    twitter: {
      images: ["/laxm_logo.png"],
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return notFound();

  return (
    <main className="min-h-screen bg-[var(--ivory)]">
      {/* Hero Header */}
      <section className="relative py-24 px-6 hero-gradient text-white">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm text-[var(--gold)] mb-8 hover:underline"
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
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center justify-center space-x-4 text-sm md:text-base text-gray-300">
            <time dateTime={post.date}>{post.date}</time>
            <span>•</span>
            <span>Laxm Editorial</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-16 px-6">
        <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
          <div
            className="prose prose-lg max-w-none 
              prose-headings:text-[var(--navy)] prose-headings:font-bold
              prose-p:text-[var(--navy)]/80 prose-p:leading-relaxed
              prose-a:text-[var(--gold)] prose-a:no-underline hover:prose-a:underline
              prose-strong:text-[var(--navy)]
              prose-li:text-[var(--navy)]/80
              prose-blockquote:border-l-[var(--gold)] prose-blockquote:bg-gray-50 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:not-italic
            "
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </div>
      </article>

      {/* Bottom Navigation */}
      <section className="pb-20 px-6 text-center">
        <Link
          href="/contact"
          className="inline-block bg-[var(--navy)] text-white px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all"
        >
          Discuss this topic with us
        </Link>
      </section>
    </main>
  );
}
