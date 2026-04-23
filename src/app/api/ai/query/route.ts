import { NextRequest, NextResponse } from "next/server";
import { queryLLMWithContext } from "@/lib/llm";

// Enforce an upper bound on request bodies to prevent deserialization DoS
export const maxDuration = 30;

const MAX_QUERY_LENGTH = 1000;
const MAX_TOKENS_LIMIT = 1000;

export async function POST(request: NextRequest) {
  try {
    // Guard against oversized request bodies
    const contentLength = request.headers.get("content-length");
    if (contentLength && parseInt(contentLength, 10) > 8192) {
      return NextResponse.json(
        { success: false, error: "Request body too large" },
        { status: 413 }
      );
    }

    const body = await request.json();
    const {
      query,
      includeContext = true,
      maxTokens = 500,
      temperature = 0.7,
    } = body;

    if (!query || typeof query !== "string") {
      return NextResponse.json(
        { success: false, error: "Query parameter is required" },
        { status: 400 }
      );
    }

    if (query.length > MAX_QUERY_LENGTH) {
      return NextResponse.json(
        { success: false, error: "Query exceeds maximum allowed length" },
        { status: 400 }
      );
    }

    // Clamp maxTokens to a safe range — prevents unbounded LLM cost/DoS
    const safeMaxTokens = Math.min(
      Math.max(1, typeof maxTokens === "number" ? maxTokens : 500),
      MAX_TOKENS_LIMIT
    );

    // Clamp temperature to valid OpenAI range [0, 2]
    const safeTemperature =
      typeof temperature === "number"
        ? Math.min(Math.max(0, temperature), 2)
        : 0.7;

    // Coerce includeContext to boolean
    const safeIncludeContext = Boolean(includeContext);

    const response = await queryLLMWithContext(query, {
      includeContext: safeIncludeContext,
      maxTokens: safeMaxTokens,
      temperature: safeTemperature,
    });

    return NextResponse.json(
      {
        success: true,
        response,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing AI query:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process query" },
      { status: 500 }
    );
  }
}
