import { NextRequest, NextResponse } from 'next/server';
import { getDynamicLLMsFull } from '@/lib/generateLLMsFull';

export async function GET(request: NextRequest) {
  try {
    // Generate dynamic content with latest data
    const { content, lastUpdated } = await getDynamicLLMsFull();
    
    // Set appropriate headers for text file
    const headers = new Headers({
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600', // Cache for 1 hour
      'Last-Modified': new Date(lastUpdated).toUTCString(),
      'X-Content-Generated-At': lastUpdated,
    });

    return new NextResponse(content, {
      status: 200,
      headers,
    });
  } catch (error) {
    console.error('Error generating llms-full.txt:', error);
    return NextResponse.json(
      { error: 'Failed to generate llms-full.txt' },
      { status: 500 }
    );
  }
}
