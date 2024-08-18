import { getPlaiceholder } from 'plaiceholder';
import { NextRequest, NextResponse } from 'next/server';
import { revalidate } from '@/app/lib/data';

export async function GET(request: NextRequest) {
  const lang = request.nextUrl.searchParams.get('lang');

  try {
    const response = await fetch(
      `https://units.a2hosted.com/next/wp-json/wp/v2/options`,
      {
        next: {
          revalidate,
        },
      }
    );

    const data: options = await response.json();

    const getImagePlaceholder = async (url: string) => {
      const buffer = await fetch(url).then(async (res) =>
        Buffer.from(await res.arrayBuffer())
      );
      return await getPlaiceholder(buffer);
    };

    if (lang === 'en') {
      data.home.main.image.placeholder = await getImagePlaceholder(
        data.home.main.image.url
      );
      data.home.about.image.placeholder = await getImagePlaceholder(
        data.home.about.image.url
      );

      const placeholders = await Promise.all(
        data.home.steps.map(
          async (step) => await getImagePlaceholder(step.image.url)
        )
      );

      data.home.steps.forEach(
        (step, index) => (step.image.placeholder = placeholders[index])
      );
    } else {
      data.home.main_ar.image.placeholder = await getImagePlaceholder(
        data.home.main_ar.image.url
      );
      data.home.about_ar.image.placeholder = await getImagePlaceholder(
        data.home.about_ar.image.url
      );

      const placeholders = await Promise.all(
        data.home.steps_ar.map(
          async (step) => await getImagePlaceholder(step.image.url)
        )
      );

      data.home.steps_ar.forEach(
        (step, index) => (step.image.placeholder = placeholders[index])
      );
    }
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(error);
  }
}
