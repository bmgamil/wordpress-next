import { NextRequest, NextResponse } from 'next/server';
import { getPlaiceholder } from 'plaiceholder';

export async function GET(request: NextRequest) {
  const slug = request.nextUrl.searchParams.get('slug');

  try {
    const response = await fetch(
      `https://units.a2hosted.com/next/wp-json/wp/v2/project?slug=${slug}`
    );

    const data: Project[] = await response.json();
    const newData: Project[] = [];

    if (data.length > 0) {
      await Promise.all(
        data.map(async (project) => {
          if (project.featured_media !== null) {
            const buffer = await fetch(
              project.featured_media.source_url ?? ''
            ).then(async (res) => Buffer.from(await res.arrayBuffer()));
            const { base64, color, metadata, css } = await getPlaiceholder(
              buffer
            );

            project.featured_media.placeholder = {
              base64,
              color,
              metadata,
              css,
            };
          }

          newData.push(project);
        })
      );
    }

    return NextResponse.json(newData[0]);
  } catch (error) {
    return NextResponse.json({
      project: null,
      error: error,
    });
  }
}
