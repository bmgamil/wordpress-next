import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const startTime = Date.now(); // Start timing

  const lang = request.nextUrl.searchParams.get('lang');

  try {
    const response = await fetch(
      `https://units.a2hosted.com/next/wp-json/wp/v2/options`
    );

    const data: options = await response.json();

    const endTime = Date.now(); // End timing
    const duration = endTime - startTime; // Calculate duration

    return NextResponse.json({
      data,
      duration, // Include duration in the response
    });
  } catch (error) {
    const endTime = Date.now(); // End timing in case of error
    const duration = endTime - startTime; // Calculate duration

    return NextResponse.json({
      error,
      duration, // Include duration in the response
    });
  }
}
