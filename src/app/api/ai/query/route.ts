import { NextRequest, NextResponse } from "next/server";
import { queryLLMWithContext } from "@/lib/llm";

export async function POST(request: NextRequest) {
  try {
    const { query, includeContext = true, maxTokens = 500, temperature = 0.7 } =
      await request.json();

    if (!query || typeof query !== "string") {
      return NextResponse.json(
        { success: false, error: "Query parameter is required" },
        { status: 400 }
      );
    }

    const response = await queryLLMWithContext(query, {
      includeContext,
      maxTokens,
      temperature,
    });

    return NextResponse.json(
      {
        success: true,
        query,
        response,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing AI query:", error);
    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Failed to process query",
      },
      { status: 500 }
    );
  }
}
