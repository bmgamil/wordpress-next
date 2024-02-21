import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const search = request.nextUrl.searchParams.get('search');

  try {
    const response = await fetch(
      `https://units.a2hosted.com/next/wp-json/wp/v2/posts?search=${search}`
    );

    const data: Blog[] = await response.json();
    const newData = [];

    if (data.length > 0) {
      for (let i = 0; i < data.length; i++) {
        const blog = {
          id: data[i].id,
          title: data[i].title,
          slug: data[i].slug,
        };

        newData.push(blog);
      }
    }

    return NextResponse.json(newData);
  } catch (error) {
    return NextResponse.json(error);
  }
}
