import { NextRequest, NextResponse } from 'next/server';
import { getPlaiceholder } from 'plaiceholder';

export async function GET(request: NextRequest) {
  const slug = request.nextUrl.searchParams.get('slug')
    ? `slug=${request.nextUrl.searchParams.get('slug')}`
    : '';

  try {
    const response = await fetch(
      `https://units.a2hosted.com/next/wp-json/wp/v2/posts?${slug}`
    );

    const data: Blog[] = await response.json();

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
      }
    }

    return NextResponse.json(data[0]);
  } catch (error) {
    return NextResponse.json(error);
  }
}
