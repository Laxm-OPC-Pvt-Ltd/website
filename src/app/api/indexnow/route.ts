import { NextRequest, NextResponse } from "next/server";
import { BASE_URL } from "@/lib/metadata";

interface IndexNowPayload {
  host: string;
  key: string;
  keyLocation: string;
  urlList: string[];
}

export async function GET() {
  return NextResponse.json({
    enabled: Boolean(process.env.INDEXNOW_KEY),
    endpoint: `${BASE_URL}/api/indexnow`,
    keyLocation: `${BASE_URL}/indexnow-key.txt`,
    providerEndpoint: "https://api.indexnow.org/indexnow",
  });
}

export async function POST(request: NextRequest) {
  const authHeader = request.headers.get("x-indexnow-token");
  const adminToken = process.env.INDEXNOW_ADMIN_TOKEN;

  if (adminToken && authHeader !== adminToken) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const key = process.env.INDEXNOW_KEY;
  if (!key) {
    return NextResponse.json(
      { error: "INDEXNOW_KEY is not configured" },
      { status: 500 },
    );
  }

  let body: { url?: string; urls?: string[] };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON payload" },
      { status: 400 },
    );
  }

  const inputUrls = body.url ? [body.url] : body.urls || [];
  const urls = inputUrls
    .filter(Boolean)
    .map((url) => (url.startsWith("http") ? url : `${BASE_URL}${url.startsWith("/") ? "" : "/"}${url}`));

  if (!urls.length) {
    return NextResponse.json(
      { error: "Provide 'url' or 'urls'" },
      { status: 400 },
    );
  }

  const payload: IndexNowPayload = {
    host: "www.thelaxm.com",
    key,
    keyLocation: `${BASE_URL}/indexnow-key.txt`,
    urlList: urls,
  };

  const indexNowResponse = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(payload),
  });

  if (!indexNowResponse.ok) {
    const message = await indexNowResponse.text();
    return NextResponse.json(
      {
        success: false,
        status: indexNowResponse.status,
        message: message || "IndexNow submission failed",
      },
      { status: 502 },
    );
  }

  return NextResponse.json(
    {
      success: true,
      submitted: urls.length,
      urls,
    },
    { status: 200 },
  );
}
