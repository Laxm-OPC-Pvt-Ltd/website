import { logoutAdmin } from "@/lib/adminAuth";

export const runtime = "nodejs";

export async function POST() {
  return logoutAdmin();
}

