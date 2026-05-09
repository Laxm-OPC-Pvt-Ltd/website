import { NextResponse } from "next/server";
import { faqs } from "@/data/faqs";
import { BASE_URL } from "@/lib/metadata";

export const revalidate = 3600;

export async function GET() {
  return NextResponse.json(
    {
      organization: "Laxm OPC Private Limited",
      source: `${BASE_URL}/faqs`,
      total: faqs.length,
      faqs: faqs.map(({ id, question, answer, category, keywords }) => ({
        id,
        question,
        answer,
        category,
        keywords,
      })),
    },
    {
      status: 200,
      headers: {
        "Cache-Control": "public, max-age=3600, s-maxage=3600",
      },
    },
  );
}
