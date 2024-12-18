import { NextResponse } from 'next/server';

export async function GET() {
  const startTime = Date.now(); // Start timing

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

    const endTime = Date.now(); // End timing
    const duration = endTime - startTime; // Calculate duration

    return NextResponse.json({
      data,
      duration, // Include duration in the response
    });
  } catch (error) {
    const endTime = Date.now(); // End timing in case of error
    const duration = endTime - startTime; // Calculate duration

    return NextResponse.json({
      project: null,
      error: error,
      duration, // Include duration in the response
    });
  }
}
