import { revalidate } from '@/app/lib/data';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const startTime = Date.now(); // Start timing

  const slug = request.nextUrl.searchParams.get('slug');
  const perPage = request.nextUrl.searchParams.get('per_page')
    ? `&per_page=${request.nextUrl.searchParams.get('per_page')}`
    : '';

  const page = request.nextUrl.searchParams.get('page')
    ? `&page=${request.nextUrl.searchParams.get('page')}`
    : '';

  try {
    const [response, categoryResponse] = await Promise.all([
      fetch(
        `https://units.a2hosted.com/next/wp-json/wp/v2/posts?category=${slug}${perPage}${page}`
      ),
      fetch(
        `https://units.a2hosted.com/next/wp-json/wp/v2/categories?slug=${slug}`
      ),
    ]);

    const totalPages = response.headers.get('x-wp-totalpages');
    const data = await response.json();
    const categoryData = await categoryResponse.json();

    const endTime = Date.now(); // End timing
    const duration = endTime - startTime; // Calculate duration

    return NextResponse.json({
      blogs: data,
      seo: categoryData[0].seo,
      totalPages,
      error: null,
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
