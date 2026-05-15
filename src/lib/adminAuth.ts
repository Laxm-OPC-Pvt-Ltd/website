import crypto from "crypto";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const COOKIE_NAME = "laxm_admin_session";
const SESSION_TTL_SECONDS = 60 * 60 * 24 * 7;

type SessionPayload = {
  iat: number;
  exp: number;
};

function base64UrlEncode(input: Buffer | string) {
  const buffer = Buffer.isBuffer(input) ? input : Buffer.from(input, "utf8");
  return buffer
    .toString("base64")
    .replaceAll("+", "-")
    .replaceAll("/", "_")
    .replaceAll("=", "");
}

function base64UrlDecodeToBuffer(input: string) {
  const padded = input
    .replaceAll("-", "+")
    .replaceAll("_", "/")
    .padEnd(Math.ceil(input.length / 4) * 4, "=");
  return Buffer.from(padded, "base64");
}

function getAdminPassword() {
  return process.env.ADMIN_PASSWORD || "admin@Laxm2026";
}

function getSessionSecret() {
  return process.env.ADMIN_SESSION_SECRET || "dev-secret-change-me";
}

function sign(payloadB64: string) {
  return base64UrlEncode(
    crypto
      .createHmac("sha256", getSessionSecret())
      .update(payloadB64, "utf8")
      .digest(),
  );
}

function createToken(nowSeconds: number) {
  const payload: SessionPayload = {
    iat: nowSeconds,
    exp: nowSeconds + SESSION_TTL_SECONDS,
  };
  const payloadB64 = base64UrlEncode(JSON.stringify(payload));
  const signature = sign(payloadB64);
  return `${payloadB64}.${signature}`;
}

function verifyToken(token: string | undefined, nowSeconds: number) {
  if (!token) return false;
  const [payloadB64, signature] = token.split(".");
  if (!payloadB64 || !signature) return false;

  const expectedSignature = sign(payloadB64);
  const a = Buffer.from(signature, "utf8");
  const b = Buffer.from(expectedSignature, "utf8");
  if (a.length !== b.length) return false;
  if (!crypto.timingSafeEqual(a, b)) return false;

  let payload: SessionPayload;
  try {
    payload = JSON.parse(
      base64UrlDecodeToBuffer(payloadB64).toString("utf8"),
    ) as SessionPayload;
  } catch {
    return false;
  }

  if (typeof payload.exp !== "number") return false;
  if (payload.exp <= nowSeconds) return false;
  return true;
}

function safeEqual(a: string, b: string) {
  const aBuf = Buffer.from(a, "utf8");
  const bBuf = Buffer.from(b, "utf8");
  if (aBuf.length !== bBuf.length) return false;
  return crypto.timingSafeEqual(aBuf, bBuf);
}

export function isAdminAuthed(request: NextRequest) {
  const token = request.cookies.get(COOKIE_NAME)?.value;
  const nowSeconds = Math.floor(Date.now() / 1000);
  return verifyToken(token, nowSeconds);
}

export function requireAdmin(request: NextRequest) {
  if (isAdminAuthed(request)) return null;
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

export async function loginAdmin(request: NextRequest) {
  let body: { password?: string };
  try {
    body = (await request.json()) as { password?: string };
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const provided = String(body.password || "");
  const expected = getAdminPassword();
  if (!safeEqual(provided, expected)) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const nowSeconds = Math.floor(Date.now() / 1000);
  const token = createToken(nowSeconds);

  const response = NextResponse.json({ success: true }, { status: 200 });
  response.cookies.set(COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: SESSION_TTL_SECONDS,
  });

  return response;
}

export function logoutAdmin() {
  const response = NextResponse.json({ success: true }, { status: 200 });
  response.cookies.set(COOKIE_NAME, "", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 0,
  });
  return response;
}
