import { NextRequest, NextResponse } from 'next/server';
import { getPlaiceholder } from 'plaiceholder';

export async function GET(request: NextRequest) {
  const slug = request.nextUrl.searchParams.get('slug');
  const url = `https://units.a2hosted.com/next/wp-json/wp/v2/service${
    slug ? `?slug=${slug}` : ''
  }`;

  try {
    const response = await fetch(url);
    const totalPages = response.headers.get('x-wp-totalpages');
    const data: ServiceDetail[] = await response.json();
    const processData = async (item: any) => {
      if (item.featured_media) {
        const buffer = await fetch(item.featured_media.source_url ?? '');
        const { base64, color, metadata, css } = await getPlaiceholder(
          Buffer.from(await buffer.arrayBuffer())
        );
        item.featured_media.placeholder = { base64, color, metadata, css };
      }

      if (item.projects && item.projects.length > 0) {
        for (const project of item.projects) {
          await processData(project);
        }
      }
    };
    slug
      ? [await processData(data[0])]
      : await Promise.all(data.map(processData));
    return NextResponse.json({
      services: slug ? data[0] : data,
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
