import { NextRequest, NextResponse } from 'next/server';
// Remove the import of getPlaiceholder
//

export async function GET(request: NextRequest) {
  const startTime = Date.now(); // Start timing

  const perPage = request.nextUrl.searchParams.get('per_page')
    ? `&per_page=${request.nextUrl.searchParams.get('per_page')}`
    : '';

  const page = request.nextUrl.searchParams.get('page')
    ? `&page=${request.nextUrl.searchParams.get('page')}`
    : '';

  try {
    const response = await fetch(
      `https://units.a2hosted.com/next/wp-json/wp/v2/posts?${perPage}${page}`
    );
    const totalPages = response.headers.get('x-wp-totalpages');

    const data: Blog[] = await response.json();

    const endTime = Date.now(); // End timing
    const duration = endTime - startTime; // Calculate duration

    return NextResponse.json({
      blogs: data,
      totalPages,
      error: null,
      duration, // Include duration in the response
    });
  } catch (error) {
    const endTime = Date.now(); // End timing in case of error
    const duration = endTime - startTime; // Calculate duration

    return NextResponse.json({
      blogs: null,
      error: error,
      duration, // Include duration in the response
    });
  }
}
