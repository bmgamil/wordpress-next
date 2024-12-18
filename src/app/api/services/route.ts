import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const startTime = Date.now(); // Start timing
  console.time('services duration');
  const slug = request.nextUrl.searchParams.get('slug');
  const url = `https://units.a2hosted.com/next/wp-json/wp/v2/service${
    slug ? `?slug=${slug}` : ''
  }`;

  try {
    const response = await fetch(url);
    console.timeEnd('services duration');
    const endTime = Date.now(); // End timing
    const duration = endTime - startTime; // Calculate duration

    const totalPages = response.headers.get('x-wp-totalpages');

    const data: ServiceDetail[] = await response.json();

    return NextResponse.json({
      services: slug ? data[0] : data,
      totalPages,
      error: null,
      duration, // Include duration in the response
    });
  } catch (error) {
    const endTime = Date.now(); // End timing in case of error
    const duration = endTime - startTime; // Calculate duration

    return NextResponse.json({
      projects: null,
      error: error,
      duration, // Include duration in the response
    });
  }
}
