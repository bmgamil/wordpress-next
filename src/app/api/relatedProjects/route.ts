import { NextRequest, NextResponse } from 'next/server';
import { getPlaiceholder } from 'plaiceholder';
import { revalidate } from '@/app/lib/data';

export async function GET(request: NextRequest) {
  const id = request.nextUrl.searchParams.get('id');

  const url = `https://units.a2hosted.com/next/wp-json/wp/v2/project?exclude=${id}&per_page=5&orderby=date`;
  try {
    const response = await fetch(url, {
      next: {
        revalidate,
      },
      // cache: 'force-cache',
    });

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

    return NextResponse.json(newData);
  } catch (error) {
    return NextResponse.json(error);
  }
}
