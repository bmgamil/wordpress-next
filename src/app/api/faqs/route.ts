import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const startTime = Date.now(); // Start timing

  try {
    const response = await fetch(
      `https://units.a2hosted.com/next/wp-json/wp/v2/faq`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch FAQs');
    }

    const data: FAQ[] = await response.json();

    const endTime = Date.now(); // End timing
    const duration = endTime - startTime; // Calculate duration

    return NextResponse.json({
      data,
      duration, // Include duration in the response
    });
  } catch (error) {
    const endTime = Date.now(); // End timing in case of error
    const duration = endTime - startTime; // Calculate duration

    if (error instanceof Error) {
      return NextResponse.json({
        error: error.message,
        duration, // Include duration in the response
      });
    } else {
      return NextResponse.json({
        error: 'An unknown error occurred',
        duration, // Include duration in the response
      });
    }
  }
}
