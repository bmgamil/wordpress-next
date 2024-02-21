import { getPlaiceholder } from 'plaiceholder';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const response = await fetch(
      `https://units.a2hosted.com/next/wp-json/wp/v2/options`
    );

    const data: options = await response.json();

    const mainHomeBuffer = await fetch(data.home.main.image.url).then(
      async (res) => Buffer.from(await res.arrayBuffer())
    );
    const mainHomePlaceholder = await getPlaiceholder(mainHomeBuffer);
    data.home.main.image.placeholder = mainHomePlaceholder;

    const aboutHomeBuffer = await fetch(data.home.about.image.url).then(
      async (res) => Buffer.from(await res.arrayBuffer())
    );

    const aboutHomePlaceholder = await getPlaiceholder(aboutHomeBuffer);
    data.home.about.image.placeholder = aboutHomePlaceholder;

    for (let i = 0; i < data.home.steps.length; i++) {
      const stepBuffer = await fetch(data.home.steps[i].image.url).then(
        async (res) => Buffer.from(await res.arrayBuffer())
      );

      const stepPlaceHolder = await getPlaiceholder(stepBuffer);
      data.home.steps[i].image.placeholder = stepPlaceHolder;
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(error);
  }
}
