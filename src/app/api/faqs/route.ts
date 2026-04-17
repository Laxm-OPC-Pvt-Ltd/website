import { NextRequest, NextResponse } from "next/server";
import { faqs, getCategories, getFAQsByCategory } from "@/data/faqs";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const category = searchParams.get("category");
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");

    let result = faqs;

    // Filter by category if provided
    if (category && category !== "all") {
      result = getFAQsByCategory(category);
    }

    // Pagination
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedResult = result.slice(startIndex, endIndex);

    return NextResponse.json(
      {
        success: true,
        data: paginatedResult,
        pagination: {
          page,
          limit,
          total: result.length,
          pages: Math.ceil(result.length / limit),
        },
        categories: getCategories(),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching FAQs:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch FAQs" },
      { status: 500 }
    );
  }
}
