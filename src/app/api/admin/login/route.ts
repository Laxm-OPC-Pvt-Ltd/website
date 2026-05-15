import type { NextRequest } from "next/server";
import { loginAdmin } from "@/lib/adminAuth";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  return loginAdmin(request);
}

