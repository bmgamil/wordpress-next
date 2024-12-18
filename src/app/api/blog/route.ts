import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const slug = request.nextUrl.searchParams.get('slug')
    ? `slug=${request.nextUrl.searchParams.get('slug')}`
    : '';

  try {
    const response = await fetch(
      `https://units.a2hosted.com/next/wp-json/wp/v2/posts?${slug}`
    );

    const data: Blog[] = await response.json();

    return NextResponse.json(data[0]);
  } catch (error) {
    return NextResponse.json(error);
  }
}
