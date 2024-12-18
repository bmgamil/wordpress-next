import { NextRequest, NextResponse } from 'next/server';

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

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(error);
  }
}
