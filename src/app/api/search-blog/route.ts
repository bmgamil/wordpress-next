import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const search = request.nextUrl.searchParams.get('search');

  try {
    const response = await fetch(
      `https://units.a2hosted.com/next/wp-json/wp/v2/posts?search=${search}`
    );

    const data: Blog[] = await response.json();

    const newData = data.map((blog) => ({
      id: blog.id,
      title: blog.title,
      slug: blog.slug,
    }));

    return NextResponse.json(newData);
  } catch (error) {
    return NextResponse.json(error);
  }
}
