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

    if (data.length > 0) {
      await Promise.all(
        data.map(async (post: Blog) => {
          if (post.featured_media !== null) {
            const buffer = await fetch(
              post.featured_media.source_url ?? ''
            ).then(async (res) => Buffer.from(await res.arrayBuffer()));
            const { base64, color, css, metadata } = await getPlaiceholder(
              buffer
            );
            post.featured_media.placeholder = { base64, color, css, metadata };
          }
        })
      );
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
