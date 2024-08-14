import { revalidate } from '@/app/lib/data';
import { NextRequest, NextResponse } from 'next/server';
import { getPlaiceholder } from 'plaiceholder';

export async function GET(request: NextRequest) {
  const slug = request.nextUrl.searchParams.get('slug');
  const perPage = request.nextUrl.searchParams.get('per_page')
    ? `&per_page=${request.nextUrl.searchParams.get('per_page')}`
    : '';

  const page = request.nextUrl.searchParams.get('page')
    ? `&page=${request.nextUrl.searchParams.get('page')}`
    : '';

  try {
    const response = await fetch(
      `https://units.a2hosted.com/next/wp-json/wp/v2/posts?category=${slug}${perPage}${page}`
    );
    const totalPages = response.headers.get('x-wp-totalpages');
    const data = await response.json();

    const categoryResponse = await fetch(
      `https://units.a2hosted.com/next/wp-json/wp/v2/categories?slug=${slug}`,
      {
        next: {
          revalidate,
        },

        // cache: 'force-cache',
      }
    );

    const categoryData = await categoryResponse.json();

    debugger;

    if (data.length > 0) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].featured_media !== null) {
          const buffer = await fetch(
            data[i].featured_media.source_url ?? ''
          ).then(async (res) => Buffer.from(await res.arrayBuffer()));
          const { base64 } = await getPlaiceholder(buffer);

          data[i].featured_media.placeholder = {
            base64,
          };
        }
      }
    }

    return NextResponse.json({
      blogs: data,
      seo: categoryData[0].seo,
      totalPages,
      error: null,
    });
  } catch (error) {
    return NextResponse.json(error);
  }
}
