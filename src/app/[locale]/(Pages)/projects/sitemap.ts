import { getProjects, getServices } from '@/app/lib/Controller';
import type { MetadataRoute } from 'next';
const SITE_URL = process.env.NEXT_SITE_URL || 'https://units.com.eg';

// export async function generateSitemaps() {
//   const { services } = await getServices();
//   return services.map((service: ServiceDetail) => ({
//     id: service.slug,
//   }));
// }

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { projects } = await getProjects();

  return projects.map((project: Project) => ({
    url: `${SITE_URL}/projects/${project.slug}`,
    lastModified: new Date('2024-12-01'),
    alternates: {
      languages: {
        ar: `${SITE_URL}/ar/projects/${project.slug}`,
      },
    },
  }));
}
