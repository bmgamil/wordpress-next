import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const response = await fetch(
      `https://units.a2hosted.com/next/wp-json/wp/v2/faq`
    );

    const data: FAQ[] = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(error);
  }
}
