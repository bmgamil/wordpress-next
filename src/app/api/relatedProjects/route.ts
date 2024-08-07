import { NextRequest, NextResponse } from 'next/server';
import { getPlaiceholder } from 'plaiceholder';

export async function GET(request: NextRequest) {
  const id = request.nextUrl.searchParams.get('id');

  const title = request.nextUrl.searchParams.get('title');

  const url = `https://units.a2hosted.com/next/wp-json/wp/v2/project?exclude=${id}&post_type=project&orderby=relevance&search=${title}`;
  try {
    const response = await fetch(url, {
      next: {
        revalidate: 5,
      },
    });

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

    return NextResponse.json({ data: newData });
  } catch (error) {
    return NextResponse.json(error);
  }
}
