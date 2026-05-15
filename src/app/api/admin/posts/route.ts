import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/adminAuth";
import { deletePostBySlug, readPostsFromDisk, upsertPost } from "@/lib/postsFile";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  const unauthorized = requireAdmin(request);
  if (unauthorized) return unauthorized;

  const posts = await readPostsFromDisk();
  return NextResponse.json({ posts }, { status: 200 });
}

export async function POST(request: NextRequest) {
  const unauthorized = requireAdmin(request);
  if (unauthorized) return unauthorized;

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  try {
    const posts = await upsertPost(body as never);
    return NextResponse.json({ success: true, posts }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : "Failed to save post" },
      { status: 400 },
    );
  }
}

export async function DELETE(request: NextRequest) {
  const unauthorized = requireAdmin(request);
  if (unauthorized) return unauthorized;

  let body: { slug?: string };
  try {
    body = (await request.json()) as { slug?: string };
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  try {
    const posts = await deletePostBySlug(String(body.slug || ""));
    return NextResponse.json({ success: true, posts }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : "Failed to delete post" },
      { status: 400 },
    );
  }
}

