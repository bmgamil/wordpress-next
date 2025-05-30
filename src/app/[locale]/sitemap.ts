import type { MetadataRoute } from 'next';

const SITE_URL = process.env.NEXT_SITE_URL || 'https://units.com.eg';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: {
          ar: `${SITE_URL}/ar`,
        },
      },
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
      alternates: {
        languages: {
          ar: `${SITE_URL}/ar/about`,
        },
      },
    },
    {
      url: `${SITE_URL}/service`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: {
          ar: `${SITE_URL}/ar/service`,
        },
      },
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
      alternates: {
        languages: {
          ar: `${SITE_URL}/ar/contact`,
        },
      },
    },
    {
      url: `${SITE_URL}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: {
          ar: `${SITE_URL}/ar/projects`,
        },
      },
    },
  ];
}
