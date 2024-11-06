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
    const response = await fetch(url);
    const totalPages = response.headers.get('x-wp-totalpages');

    const data: Project[] = await response.json();

    const newData: Project[] = await Promise.all(
      data.map(async (project) => {
        if (project.featured_media !== null) {
          const buffer = await fetch(
            project.featured_media.source_url ?? ''
          ).then(async (res) => Buffer.from(await res.arrayBuffer()));
          const { base64, color, metadata, css } = await getPlaiceholder(
            buffer
          );

          project.featured_media.placeholder = { base64, color, metadata, css };
        }
        return project;
      })
    );

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
