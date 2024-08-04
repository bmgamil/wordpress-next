import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch(
      `https://units.a2hosted.com/next/wp-json/wp/v2/service`,
      {
        next: {
          revalidate: 5,
        },
      }
    );

    const responseData: ServiceDetail[] = await response.json();

    const data: ProjectCategory[] = [];
    if (responseData.length > 0) {
      for (let i = 0; i < responseData.length; i++) {
        if (responseData[i].projects.length > 0) {
          data.push({
            id: responseData[i].id,
            slug: responseData[i].slug,
            title: responseData[i].title,
          });
        }
      }
    }
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({
      project: null,
      error: error,
    });
  }
}
