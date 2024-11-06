import { getPlaiceholder } from 'plaiceholder';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const lang = request.nextUrl.searchParams.get('lang');

  try {
    const response = await fetch(
      `https://units.a2hosted.com/next/wp-json/wp/v2/options`
    );

    const data: options = await response.json();

    const getImagePlaceholder = async (url: string) => {
      const buffer = await fetch(url).then(async (res) =>
        Buffer.from(await res.arrayBuffer())
      );
      return await getPlaiceholder(buffer);
    };

    const processImages = async (images: optionMedia[]) => {
      const placeholders = await Promise.all(
        images.map(async (image) => await getImagePlaceholder(image.url))
      );

      images.forEach((image, index) => {
        image.placeholder = placeholders[index];
      });
    };

    if (lang === 'en') {
      await processImages([data.home.main.image, data.home.about.image]);
      await processImages(data.home.steps.map((step) => step.image));
    } else {
      await processImages([data.home.main_ar.image, data.home.about_ar.image]);
      await processImages(data.home.steps_ar.map((step) => step.image));
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(error);
  }
}
