import { NextRequest, NextResponse } from 'next/server';
//

export async function GET(request: NextRequest) {
  const startTime = Date.now(); // Start timing

  const perPage = request.nextUrl.searchParams.get('per_page')
    ? `&per_page=${request.nextUrl.searchParams.get('per_page')}`
    : '';

  const page = request.nextUrl.searchParams.get('page')
    ? `&page=${request.nextUrl.searchParams.get('page')}`
    : '';

  const category = request.nextUrl.searchParams.get('types_cat_slug')
    ? `&types_cat_slug=${request.nextUrl.searchParams.get('types_cat_slug')}`
    : '';

  const url = `https://units.a2hosted.com/next/wp-json/wp/v2/project?${perPage}${page}${category}`;
  try {
    const response = await fetch(url);
    const totalPages = response.headers.get('x-wp-totalpages');

    const data: Project[] = await response.json();
    const endTime = Date.now(); // End timing
    const duration = endTime - startTime; // Calculate duration

    return NextResponse.json({
      projects: data,
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
