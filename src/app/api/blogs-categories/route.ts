import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const response = await fetch(
      `https://units.a2hosted.com/next/wp-json/wp/v2/categories`
    );

    const data: BlogCategory[] = await response.json();
    const newData: BlogCategory[] = [];

    if (data.length > 0) {
      for (let i = 0; i < data.length; i++) {
        const category: BlogCategory = {
          id: data[i].id,
          title: data[i].title,
          name: data[i].name,
          slug: data[i].slug,
        };

        newData.push(category);
      }
    }

    return NextResponse.json(newData);
  } catch (error) {
    return NextResponse.json(error);
  }
}
