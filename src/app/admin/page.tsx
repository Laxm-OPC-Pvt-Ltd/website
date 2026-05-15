"use client";

import { useMemo, useState, useEffect } from "react";
import type { Post } from "@/data/posts";
import RichTextEditor from "@/components/admin/RichTextEditor";

type PostDraft = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  author: string;
  readingTime: number;
  featured: boolean;
  image: string;
  tagsText: string;
  references: { label: string; url: string; date?: string }[];
  contentHtml: string;
};

function newDraftFromPost(post?: Post): PostDraft {
  const today = new Date().toISOString().slice(0, 10);
  return {
    slug: post?.slug ?? "",
    title: post?.title ?? "",
    excerpt: post?.excerpt ?? "",
    date: post?.date ?? today,
    category: post?.category ?? "Healthcare",
    author: post?.author ?? "Laxm",
    readingTime: post?.readingTime ?? 8,
    featured: Boolean(post?.featured),
    image: post?.image ?? "",
    tagsText: post?.tags?.join(", ") ?? "",
    references: post?.references ? [...post.references] : [],
    contentHtml: post?.contentHtml ?? "<article></article>",
  };
}

async function readJson<T>(res: Response): Promise<T> {
  const text = await res.text();
  try {
    return JSON.parse(text) as T;
  } catch {
    throw new Error(text || `Request failed (${res.status})`);
  }
}

async function api<T>(
  input: RequestInfo | URL,
  init?: RequestInit,
): Promise<T> {
  const res = await fetch(input, init);
  if (!res.ok) {
    const data = await readJson<{ error?: string; message?: string }>(
      res,
    ).catch(() => ({}) as { error?: string; message?: string });
    throw new Error(
      data.error || data.message || `Request failed (${res.status})`,
    );
  }
  return readJson<T>(res);
}

export default function Admin() {
  const [authed, setAuthed] = useState<boolean | null>(null);
  const [items, setItems] = useState<Post[]>([]);
  const [draft, setDraft] = useState<PostDraft>(() => newDraftFromPost());
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  const slugIndex = useMemo(() => {
    const map = new Map<string, number>();
    for (const p of items) map.set(p.slug, (map.get(p.slug) ?? 0) + 1);
    return map;
  }, [items]);

  async function refreshPosts() {
    setLoading(true);
    setError(null);
    try {
      const data = await api<{ posts: Post[] }>("/api/admin/posts", {
        method: "GET",
      });
      setItems(data.posts);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to load posts");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const session = await api<{ authed: boolean }>("/api/admin/session", {
          method: "GET",
        });
        if (cancelled) return;
        setAuthed(session.authed);
        if (session.authed) await refreshPosts();
      } catch {
        if (cancelled) return;
        setAuthed(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  async function login(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setNotice(null);
    const data = new FormData(e.currentTarget);
    const password = String(data.get("password") || "");
    setLoading(true);
    try {
      await api<{ success: true }>("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      setAuthed(true);
      await refreshPosts();
      setNotice("Logged in");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Login failed");
    } finally {
      setLoading(false);
    }
  }

  async function logout() {
    setError(null);
    setNotice(null);
    try {
      await api<{ success: true }>("/api/admin/logout", { method: "POST" });
    } catch {
    } finally {
      setAuthed(false);
      setItems([]);
      setDraft(newDraftFromPost());
    }
  }

  async function savePost() {
    setError(null);
    setNotice(null);
    setSaving(true);
    try {
      const tags = draft.tagsText
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean);

      const payload = {
        slug: draft.slug,
        title: draft.title,
        excerpt: draft.excerpt,
        date: draft.date,
        category: draft.category,
        author: draft.author,
        readingTime: Number(draft.readingTime) || 1,
        featured: draft.featured,
        image: draft.image || undefined,
        tags: tags.length ? tags : undefined,
        references: draft.references.length ? draft.references : undefined,
        contentHtml: draft.contentHtml,
      };

      const data = await api<{ success: true; posts: Post[] }>(
        "/api/admin/posts",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        },
      );
      setItems(data.posts);
      setDraft(newDraftFromPost());
      setNotice("Saved to src/data/posts.ts");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to save");
    } finally {
      setSaving(false);
    }
  }

  async function deletePost(slug: string) {
    setError(null);
    setNotice(null);
    if (!window.confirm(`Delete "${slug}"?`)) return;
    setSaving(true);
    try {
      const data = await api<{ success: true; posts: Post[] }>(
        "/api/admin/posts",
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ slug }),
        },
      );
      setItems(data.posts);
      setDraft(newDraftFromPost());
      setNotice("Deleted");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to delete");
    } finally {
      setSaving(false);
    }
  }

  if (authed === null) {
    return (
      <section className="mx-auto max-w-md px-6 py-16">
        <h1 className="text-2xl font-bold">Admin</h1>
        <p className="mt-2 text-zinc-600 text-sm">Checking session…</p>
      </section>
    );
  }

  if (authed !== true) {
    return (
      <section className="mx-auto max-w-md px-6 py-16">
        <h1 className="text-2xl font-bold">Admin Login</h1>
        <p className="mt-2 text-zinc-600 text-sm">
          Login to manage blog posts. This writes directly into{" "}
          <span className="font-mono">src/data/posts.ts</span>.
        </p>
        <form onSubmit={login} className="mt-6 grid gap-4">
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="border rounded-md p-3"
            required
          />
          {error && <p className="text-red-600 text-sm">{error}</p>}
          <button
            disabled={loading}
            className="rounded-md bg-black text-white px-4 py-2 w-fit disabled:opacity-50"
          >
            {loading ? "Logging in…" : "Login"}
          </button>
        </form>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Blog Admin</h1>
        <div className="flex gap-3">
          <button
            className="border px-3 py-2 rounded-md disabled:opacity-50"
            onClick={() => setDraft(newDraftFromPost())}
            disabled={saving}
          >
            New Post
          </button>
          <button className="border px-3 py-2 rounded-md" onClick={logout}>
            Logout
          </button>
        </div>
      </div>

      {(error || notice) && (
        <div className="mt-6">
          {error ? <p className="text-red-600 text-sm">{error}</p> : null}
          {notice ? <p className="text-green-700 text-sm">{notice}</p> : null}
        </div>
      )}

      <div className="mt-10 grid md:grid-cols-2 gap-8">
        <div className="border rounded-lg p-6">
          <h2 className="text-xl font-semibold">Add / Edit Post</h2>
          <div className="mt-4 grid gap-3">
            <input
              className="border rounded-md p-2"
              placeholder="slug"
              value={draft.slug}
              onChange={(e) =>
                setDraft((d) => ({ ...d, slug: e.target.value }))
              }
            />
            <input
              className="border rounded-md p-2"
              placeholder="title"
              value={draft.title}
              onChange={(e) =>
                setDraft((d) => ({ ...d, title: e.target.value }))
              }
            />
            <input
              className="border rounded-md p-2"
              placeholder="excerpt"
              value={draft.excerpt}
              onChange={(e) =>
                setDraft((d) => ({ ...d, excerpt: e.target.value }))
              }
            />
            <div className="grid grid-cols-2 gap-3">
              <input
                className="border rounded-md p-2"
                placeholder="date (YYYY-MM-DD)"
                value={draft.date}
                onChange={(e) =>
                  setDraft((d) => ({ ...d, date: e.target.value }))
                }
              />
              <input
                className="border rounded-md p-2"
                placeholder="readingTime (minutes)"
                inputMode="numeric"
                value={String(draft.readingTime)}
                onChange={(e) =>
                  setDraft((d) => ({
                    ...d,
                    readingTime: Number(e.target.value) || 1,
                  }))
                }
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <input
                className="border rounded-md p-2"
                placeholder="category"
                value={draft.category}
                onChange={(e) =>
                  setDraft((d) => ({ ...d, category: e.target.value }))
                }
              />
              <input
                className="border rounded-md p-2"
                placeholder="author"
                value={draft.author}
                onChange={(e) =>
                  setDraft((d) => ({ ...d, author: e.target.value }))
                }
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <input
                className="border rounded-md p-2"
                placeholder="image URL (optional)"
                value={draft.image}
                onChange={(e) =>
                  setDraft((d) => ({ ...d, image: e.target.value }))
                }
              />
              <input
                className="border rounded-md p-2"
                placeholder="tags (comma separated)"
                value={draft.tagsText}
                onChange={(e) =>
                  setDraft((d) => ({ ...d, tagsText: e.target.value }))
                }
              />
            </div>
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={draft.featured}
                onChange={(e) =>
                  setDraft((d) => ({ ...d, featured: e.target.checked }))
                }
              />
              Featured
            </label>

            <div className="grid gap-2 ">
              <p className="text-sm font-medium">Content</p>
              <RichTextEditor
              //dark background rich text editor
                value={draft.contentHtml}
                onChange={(html) =>
                  setDraft((d) => ({ ...d, contentHtml: html }))
                }
              />
            </div>

            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">References</p>
                <button
                  type="button"
                  className="border px-3 py-1 rounded-md text-sm"
                  onClick={() =>
                    setDraft((d) => ({
                      ...d,
                      references: [
                        ...d.references,
                        { label: "", url: "", date: "" },
                      ],
                    }))
                  }
                >
                  Add
                </button>
              </div>
              <div className="grid gap-2">
                {draft.references.map((ref, idx) => (
                  <div
                    key={`${idx}-${ref.url}`}
                    className="grid grid-cols-12 gap-2"
                  >
                    <input
                      className="border rounded-md p-2 col-span-5"
                      placeholder="label"
                      value={ref.label}
                      onChange={(e) =>
                        setDraft((d) => {
                          const next = [...d.references];
                          next[idx] = { ...next[idx], label: e.target.value };
                          return { ...d, references: next };
                        })
                      }
                    />
                    <input
                      className="border rounded-md p-2 col-span-5"
                      placeholder="url"
                      value={ref.url}
                      onChange={(e) =>
                        setDraft((d) => {
                          const next = [...d.references];
                          next[idx] = { ...next[idx], url: e.target.value };
                          return { ...d, references: next };
                        })
                      }
                    />
                    <input
                      className="border rounded-md p-2 col-span-1"
                      placeholder="date"
                      value={ref.date || ""}
                      onChange={(e) =>
                        setDraft((d) => {
                          const next = [...d.references];
                          next[idx] = { ...next[idx], date: e.target.value };
                          return { ...d, references: next };
                        })
                      }
                    />
                    <button
                      type="button"
                      className="border rounded-md col-span-1"
                      onClick={() =>
                        setDraft((d) => ({
                          ...d,
                          references: d.references.filter((_, i) => i !== idx),
                        }))
                      }
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <button
              className="rounded-md bg-black text-white px-4 py-2 w-fit disabled:opacity-50"
              onClick={savePost}
              disabled={saving}
            >
              {saving ? "Saving…" : "Save Post"}
            </button>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Existing Posts</h2>
          <div className="mt-3 flex items-center gap-3">
            <button
              className="border px-3 py-2 rounded-md disabled:opacity-50"
              disabled={loading || saving}
              onClick={refreshPosts}
            >
              {loading ? "Refreshing…" : "Refresh"}
            </button>
            <p className="text-xs text-zinc-500">
              Note: writing to{" "}
              <span className="font-mono">src/data/posts.ts</span> requires a
              writable filesystem.
            </p>
          </div>
          <ul className="mt-4 grid gap-3">
            {items.map((p) => (
              <li key={p.slug} className="border rounded-md p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{p.title}</p>
                    <p className="text-xs text-zinc-500">{p.slug}</p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      className="border px-3 py-1 rounded-md"
                      onClick={() => setDraft(newDraftFromPost(p))}
                    >
                      Edit
                    </button>
                    <button
                      className="border px-3 py-1 rounded-md"
                      onClick={() => deletePost(p.slug)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
                {(slugIndex.get(p.slug) || 0) > 1 && (
                  <p className="text-xs text-red-600 mt-2">
                    Warning: duplicate slug
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
