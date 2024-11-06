import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const response = await fetch(
      `https://units.a2hosted.com/next/wp-json/wp/v2/faq`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch FAQs');
    }

    const data: FAQ[] = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message });
    } else {
      return NextResponse.json({ error: 'An unknown error occurred' });
    }
  }
}
