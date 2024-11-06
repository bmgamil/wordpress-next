import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
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

    return NextResponse.json(newData);
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message });
  }
}
