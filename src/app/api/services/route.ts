import { NextRequest, NextResponse } from 'next/server';
import { getPlaiceholder } from 'plaiceholder';

export async function GET(request: NextRequest) {
  const startTime = Date.now(); // Start timing

  const slug = request.nextUrl.searchParams.get('slug');
  const url = `https://units.a2hosted.com/next/wp-json/wp/v2/service${
    slug ? `?slug=${slug}` : ''
  }`;

  try {
    const response = await fetch(url);
    const totalPages = response.headers.get('x-wp-totalpages');

    const data: ServiceDetail[] = await response.json();

    const processMedia = async (item: any) => {
      if (item.featured_media) {
        const buffer = await fetch(item.featured_media.source_url ?? '');
        const { base64, color, metadata, css } = await getPlaiceholder(
          Buffer.from(await buffer.arrayBuffer())
        );
        item.featured_media.placeholder = { base64, color, metadata, css };
      }
    };

    const processProjects = async (item: any) => {
      if (item.projects && item.projects.length > 0) {
        await Promise.all(item.projects.map(processData));
      }
    };

    const processData = async (item: any) => {
      await Promise.all([processMedia(item), processProjects(item)]);
    };

    slug
      ? [await processData(data[0])]
      : await Promise.all(data.map(processData));

    const endTime = Date.now(); // End timing
    const duration = endTime - startTime; // Calculate duration

    return NextResponse.json({
      services: slug ? data[0] : data,
      totalPages,
      error: null,
      duration, // Include duration in the response
    });
  } catch (error) {
    const endTime = Date.now(); // End timing in case of error
    const duration = endTime - startTime; // Calculate duration

    return NextResponse.json({
      projects: null,
      error: error,
      duration, // Include duration in the response
    });
  }
}
