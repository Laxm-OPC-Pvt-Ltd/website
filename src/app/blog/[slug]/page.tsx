import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { posts } from "@/data/posts";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = posts.find((p) => p.slug === params.slug);
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

export default function PostPage({ params }: Props) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return notFound();
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="mt-2 text-sm text-zinc-500">{post.date}</p>
      <div
        className="prose prose-zinc mt-8"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </article>
  );
}
