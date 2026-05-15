import fs from "node:fs/promises";
import path from "node:path";
import type { Post } from "@/data/posts";

const POSTS_FILE_PATH = path.join(process.cwd(), "src", "data", "posts.ts");

function normalizeSlug(input: string) {
  return input
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

function stripUndefined<T extends Record<string, unknown>>(obj: T) {
  const entries = Object.entries(obj).filter(([, v]) => v !== undefined);
  return Object.fromEntries(entries) as T;
}

export type UpsertPostInput = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  contentHtml: string;
  category: string;
  readingTime: number;
  author: string;
  featured?: boolean;
  image?: string;
  tags?: string[];
  references?: { label: string; url: string; date?: string }[];
};

function toPost(input: UpsertPostInput): Post {
  const slug = normalizeSlug(input.slug);
  const title = input.title.trim();
  const excerpt = input.excerpt.trim();
  const date = input.date.trim();
  const contentHtml = input.contentHtml;
  const category = input.category.trim();
  const author = input.author.trim();

  const readingTime = Number.isFinite(input.readingTime) ? Math.max(1, Math.floor(input.readingTime)) : 1;

  const tags =
    input.tags
      ?.map((t) => t.trim())
      .filter(Boolean)
      .slice(0, 30) ?? undefined;

  const references =
    input.references
      ?.map((r) =>
        stripUndefined({
          label: String(r.label || "").trim(),
          url: String(r.url || "").trim(),
          date: r.date ? String(r.date).trim() : undefined,
        }),
      )
      .filter((r) => r.label && r.url) ?? undefined;

  return stripUndefined({
    slug,
    title,
    excerpt,
    date,
    contentHtml,
    category,
    readingTime,
    author,
    featured: input.featured ?? undefined,
    image: input.image?.trim() || undefined,
    tags: tags && tags.length ? tags : undefined,
    references: references && references.length ? references : undefined,
  }) as Post;
}

export async function readPostsFromDisk(): Promise<Post[]> {
  const file = await fs.readFile(POSTS_FILE_PATH, "utf8");
  const match = file.match(/export const posts: Post\[\] = (\[[\s\S]*?\]);\s*$/m);
  if (match?.[1]) {
    try {
      return JSON.parse(match[1]) as Post[];
    } catch {
      // fall through
    }
  }

  const mod = await import("@/data/posts");
  return mod.posts as Post[];
}

export async function writePostsToDisk(posts: Post[]) {
  const file = `export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  contentHtml: string;
  category: string;
  readingTime: number;
  author: string;
  featured?: boolean;
  image?: string;
  tags?: string[];
  references?: { label: string; url: string; date?: string }[];
};

export const posts: Post[] = ${JSON.stringify(posts, null, 2)};
`;

  await fs.writeFile(POSTS_FILE_PATH, file, "utf8");
}

export async function upsertPost(input: UpsertPostInput) {
  const nextPost = toPost(input);
  if (
    !nextPost.slug ||
    !nextPost.title ||
    !nextPost.excerpt ||
    !nextPost.date ||
    !nextPost.contentHtml ||
    !nextPost.category ||
    !nextPost.author
  ) {
    throw new Error("Missing required fields");
  }

  const posts = await readPostsFromDisk();
  const idx = posts.findIndex((p) => p.slug === nextPost.slug);
  const next = [...posts];
  if (idx >= 0) next[idx] = nextPost;
  else next.unshift(nextPost);

  await writePostsToDisk(next);
  return next;
}

export async function deletePostBySlug(slugInput: string) {
  const slug = normalizeSlug(slugInput);
  if (!slug) throw new Error("Invalid slug");

  const posts = await readPostsFromDisk();
  const next = posts.filter((p) => p.slug !== slug);
  await writePostsToDisk(next);
  return next;
}

