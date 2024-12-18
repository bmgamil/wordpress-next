import { NextRequest, NextResponse } from 'next/server';
// Remove the import of getPlaiceholder
//

export async function GET(request: NextRequest) {
  const startTime = Date.now(); // Start timing

  const slug = request.nextUrl.searchParams.get('slug');

  try {
    const response = await fetch(
      `https://units.a2hosted.com/next/wp-json/wp/v2/project?slug=${slug}`
    );

    const data: Project[] = await response.json();

    const endTime = Date.now(); // End timing
    const duration = endTime - startTime; // Calculate duration

    return NextResponse.json({
      project: data[0],
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
