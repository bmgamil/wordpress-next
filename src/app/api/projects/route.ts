import { revalidate } from '@/app/lib/data';
import { NextRequest, NextResponse } from 'next/server';
import { getPlaiceholder } from 'plaiceholder';

export async function GET(request: NextRequest) {
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
    const response = await fetch(url, {
      next: {
        revalidate,
      },
      // cache: 'force-cache',
    });
    const totalPages = response.headers.get('x-wp-totalpages');

    const data: Project[] = await response.json();
    const newData: Project[] = [];

    if (data.length > 0) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].featured_media !== null) {
          const buffer = await fetch(
            data[i].featured_media.source_url ?? ''
          ).then(async (res) => Buffer.from(await res.arrayBuffer()));
          const { base64, color, metadata, css } = await getPlaiceholder(
            buffer
          );

          data[i].featured_media.placeholder = { base64, color, metadata, css };
        }

        newData.push(data[i]);
      }
    }

    return NextResponse.json({
      projects: newData,
      totalPages,
      error: null,
    });
  } catch (error) {
    return NextResponse.json({
      projects: null,
      error: error,
    });
  }
}
