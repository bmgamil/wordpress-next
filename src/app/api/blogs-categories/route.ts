import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const startTime = Date.now(); // Start timing

  try {
    const response = await fetch(
      `https://units.a2hosted.com/next/wp-json/wp/v2/categories`
    );

    const data: BlogCategory[] = await response.json();

    const newData: BlogCategory[] = data.map((category) => ({
      id: category.id,
      title: category.title,
      name: category.name,
      slug: category.slug,
    }));

    const endTime = Date.now(); // End timing
    const duration = endTime - startTime; // Calculate duration

    return NextResponse.json({
      data: newData,
      duration, // Include duration in the response
    });
  } catch (error) {
    const endTime = Date.now(); // End timing in case of error
    const duration = endTime - startTime; // Calculate duration

    return NextResponse.json({
      error: (error as Error).message,
      duration, // Include duration in the response
    });
  }
}
