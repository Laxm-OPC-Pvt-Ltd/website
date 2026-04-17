import { NextRequest, NextResponse } from "next/server";
import { searchFAQs } from "@/data/faqs";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("q");

    if (!query || query.length < 2) {
      return NextResponse.json(
        {
          success: false,
          error: "Query must be at least 2 characters long",
        },
        { status: 400 }
      );
    }

    const results = searchFAQs(query);

    return NextResponse.json(
      {
        success: true,
        query,
        results,
        count: results.length,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error searching FAQs:", error);
    return NextResponse.json(
      { success: false, error: "Failed to search FAQs" },
      { status: 500 }
    );
  }
}
