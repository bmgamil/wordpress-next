import { getServices } from '@/app/lib/Controller';
import type { MetadataRoute } from 'next';
const SITE_URL = process.env.NEXT_SITE_URL || 'https://units.com.eg';

// export async function generateSitemaps() {
//   const { services } = await getServices();
//   const array = services.map((service: ServiceDetail) => ({
//     id: service.slug,
//   }));

//   return array;
// }

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { services } = await getServices();

  return services.map((service: ServiceDetail) => ({
    url: `${SITE_URL}/service/${service.slug}`,
    lastModified: new Date(),
    alternates: {
      languages: {
        ar: `${SITE_URL}/ar/service/${service.slug}`,
      },
    },
  }));
}
