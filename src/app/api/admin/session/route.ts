import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { isAdminAuthed } from "@/lib/adminAuth";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  return NextResponse.json({ authed: isAdminAuthed(request) }, { status: 200 });
}

