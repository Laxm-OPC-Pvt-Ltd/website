"use client";

import { useMemo, useState } from "react";
import type { Post } from "@/data/posts";
import { posts as basePosts } from "@/data/posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin",
  description: "Client-side admin for managing blog content locally.",
  robots: { index: false, follow: false },
};

function getPassword() {
  return process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "admin";
}

export default function Admin() {
  const [authed, setAuthed] = useState(
    () => localStorage.getItem("laxmAdmin") === "true"
  );
  const [items, setItems] = useState<Post[]>(() => {
    const raw = localStorage.getItem("laxmPosts");
    if (raw) {
      try {
        return JSON.parse(raw) as Post[];
      } catch {
        return basePosts;
      }
    } else {
      return basePosts;
    }
  });
  const [form, setForm] = useState<Partial<Post>>({});
  const [error, setError] = useState<string | null>(null);

  const mergedSlugs = useMemo(() => new Set(items.map((i) => i.slug)), [items]);

  function login(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const password = String(data.get("password")) || "";
    if (password === getPassword()) {
      localStorage.setItem("laxmAdmin", "true");
      setAuthed(true);
      setError(null);
    } else {
      setError("Incorrect password");
    }
  }

  function logout() {
    localStorage.removeItem("laxmAdmin");
    setAuthed(false);
  }

  function save() {
    localStorage.setItem("laxmPosts", JSON.stringify(items));
  }

  function exportJson() {
    const blob = new Blob([JSON.stringify(items, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "posts.json";
    a.click();
    URL.revokeObjectURL(url);
  }

  function addOrUpdate() {
    if (!form.slug || !form.title || !form.excerpt || !form.contentHtml) {
      setError("Please fill slug, title, excerpt, and content");
      return;
    }
    const date = form.date || new Date().toISOString().slice(0, 10);
    const updated: Post = {
      slug: form.slug,
      title: form.title,
      excerpt: form.excerpt,
      date,
      contentHtml: form.contentHtml,
    } as Post;
    setItems((prev) => {
      const idx = prev.findIndex((p) => p.slug === updated.slug);
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = updated;
        return next;
      }
      return [updated, ...prev];
    });
    setForm({});
    setError(null);
  }

  function remove(slug: string) {
    setItems((prev) => prev.filter((p) => p.slug !== slug));
  }

  if (!authed) {
    return (
      <section className="mx-auto max-w-md px-6 py-16">
        <h1 className="text-2xl font-bold">Admin Login</h1>
        <p className="mt-2 text-zinc-600 text-sm">
          Basic client-side login to manage blog content. Not intended for
          sensitive data.
        </p>
        <form onSubmit={login} className="mt-6 grid gap-4">
          <input
            type="password"
            name="password"
            placeholder="Password (default: admin)"
            className="border rounded-md p-3"
            required
          />
          {error && <p className="text-red-600 text-sm">{error}</p>}
          <button className="rounded-md bg-black text-white px-4 py-2 w-fit">
            Login
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
          <button className="border px-3 py-2 rounded-md" onClick={save}>
            Save (local)
          </button>
          <button className="border px-3 py-2 rounded-md" onClick={exportJson}>
            Export JSON
          </button>
          <button className="border px-3 py-2 rounded-md" onClick={logout}>
            Logout
          </button>
        </div>
      </div>

      <div className="mt-10 grid md:grid-cols-2 gap-8">
        <div className="border rounded-lg p-6">
          <h2 className="text-xl font-semibold">Add / Edit Post</h2>
          <div className="mt-4 grid gap-3">
            <input
              className="border rounded-md p-2"
              placeholder="slug"
              value={form.slug || ""}
              onChange={(e) => setForm((f) => ({ ...f, slug: e.target.value }))}
            />
            <input
              className="border rounded-md p-2"
              placeholder="title"
              value={form.title || ""}
              onChange={(e) =>
                setForm((f) => ({ ...f, title: e.target.value }))
              }
            />
            <input
              className="border rounded-md p-2"
              placeholder="excerpt"
              value={form.excerpt || ""}
              onChange={(e) =>
                setForm((f) => ({ ...f, excerpt: e.target.value }))
              }
            />
            <textarea
              className="border rounded-md p-2 h-40"
              placeholder="content (HTML)"
              value={form.contentHtml || ""}
              onChange={(e) =>
                setForm((f) => ({ ...f, contentHtml: e.target.value }))
              }
            />
            <button
              className="rounded-md bg-black text-white px-4 py-2 w-fit"
              onClick={addOrUpdate}
            >
              Save Post
            </button>
            {error && <p className="text-red-600 text-sm">{error}</p>}
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Existing Posts</h2>
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
                      onClick={() => setForm(p)}
                    >
                      Edit
                    </button>
                    <button
                      className="border px-3 py-1 rounded-md"
                      onClick={() => remove(p.slug)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
                {!mergedSlugs.has(p.slug) && (
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
