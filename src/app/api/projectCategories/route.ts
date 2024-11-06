import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch(
      `https://units.a2hosted.com/next/wp-json/wp/v2/service`
    );

    const responseData: ServiceDetail[] = await response.json();

    const data: ProjectCategory[] = responseData
      .filter((service) => service.projects.length > 0)
      .map((service) => ({
        id: service.id,
        slug: service.slug,
        title: service.title,
      }));

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({
      project: null,
      error: error,
    });
  }
}
