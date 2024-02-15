import { NextRequest, NextResponse } from 'next/server';
import { getPlaiceholder } from 'plaiceholder';

export async function GET(request: NextRequest) {
  const slug = request.nextUrl.searchParams.get('slug')
    ? `?slug=${request.nextUrl.searchParams.get('slug')}`
    : '';

  try {
    const response = await fetch(
      `https://units.a2hosted.com/next/wp-json/wp/v2/service${slug}`
    );
    const totalPages = response.headers.get('x-wp-totalpages');

    const data: ServiceDetail[] = await response.json();
    const newData: ServiceDetail[] = [];
    if (data.length > 0 && slug) {
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

        if (data[i].projects.length > 0) {
          for (let j = 0; j < data[i].projects.length; j++) {
            if (data[i].projects[j].featured_media !== null) {
              const buffer = await fetch(
                data[i].projects[j].featured_media.source_url ?? ''
              ).then(async (res) => Buffer.from(await res.arrayBuffer()));
              const { base64, color, metadata, css } = await getPlaiceholder(
                buffer
              );

              data[i].projects[j].featured_media.placeholder = {
                base64,
                color,
                metadata,
                css,
              };
            }
          }
        }

        newData.push(data[i]);
      }
    }

    return NextResponse.json({
      services: slug ? newData[0] : data,
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
