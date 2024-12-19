import { revalidate } from '@/app/lib/data';
import { getLocale } from 'next-intl/server';
export const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const IS_CACHING = process.env.NEXT_IS_CACHING === 'true';

const appendLocaleParam = (url: string, locale: string): string => {
  if (!url || !locale || url.includes('options')) return url;
  const separator = url.includes('?') ? '&' : '?';
  return `${url}${separator}lang=${encodeURIComponent(locale)}`;
};

const fetchData = async (endpoint: string, options = {}) => {
  const locale = await getLocale();
  endpoint = appendLocaleParam(endpoint, locale);

  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      next: { revalidate: IS_CACHING ? revalidate : undefined },
      cache: IS_CACHING ? undefined : 'no-cache',
      ...options,
    });
    return await response.json();
  } catch (error) {
    return { error };
  }
};

export const getProjects = async (
  perPage?: number,
  page?: number,
  slug?: string
) => {
  const query = new URLSearchParams();
  if (perPage) query.append('per_page', perPage.toString());
  if (page) query.append('page', page.toString());
  if (slug) query.append('types_cat_slug', slug);
  const url = `/project?${query.toString()}`;
  const data = await fetchData(url);

  return {
    projects: data,
    totalPages: 1,
    error: data.error || null,
  };
};

export const getProjectCategories = async () => {
  const endpoint = '/types_cat';
  const responseData = (await fetchData(endpoint)) as ServiceDetail[];
  const data: ProjectCategory[] = responseData
    // .filter((service) => service.projects.length > 0)
    .map((service) => ({
      id: service.id,
      slug: service.slug,
      title: service.name.replace('amp;', ' '),
    }));

  return {
    success: !!data,
    data: !data ? null : data,
  };
};

export const getProjectById = async (id: number, getImage?: boolean) => {
  const data = await fetchData(`/project/${id}`);
  if (getImage) {
    const mediaId = data.featured_media;
    const media = await fetchData(`/media/${mediaId}`);
    data.featured_media = media;
  }

  return {
    success: !data.error,
    data: data.error ? null : data,
  };
};

export const getProjectByServiceSlug = async (slug: string) => {
  const data = await fetchData(`/project?types_cat_slug=${slug}`);
  return {
    success: !data.error,
    data: data.error ? null : data,
  };
};

export const getServices = async (slug?: string) => {
  const endpoint = slug ? `/types_cat?slug=${slug}` : '/types_cat';
  const data = await fetchData(endpoint);

  if (slug) {
    const featured_mediaId = data[0].acf.featured_image;
    const endpoint = `/media/${featured_mediaId}`;
    const media = await fetchData(endpoint);
    data[0].acf.featured_media = media;
    const projects = await getProjectByServiceSlug(slug);
    data[0].projects = projects.data;
  }

  return {
    services: data.error ? null : slug ? data[0] : data,
    error: data.error || null,
  };
};

export const getProject = async (slug: string) => {
  const endpoint = `/project?slug=${slug}`;
  const data = await fetchData(endpoint);
  if (!!data.length && data[0].id) {
    const project = await getProjectById(data[0].id);
    const projectData = project.data;
    if (!!projectData?.acf?.related_projects?.length) {
      const promises = projectData.acf.related_projects.map((id: number) =>
        getProjectById(id, true)
      );
      const relatedProjects = await Promise.all(promises);
      data[0].related_projects = relatedProjects.map((project) => project.data);
    }
  }

  return data[0];
};

export const contactSubmitHandler = async (data: ContactSubmission) => {
  try {
    const response = await fetch(
      'https://units.a2hosted.com/next/wp-json/wp/v2/contacts',
      {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return response;
  } catch (error) {
    return { error };
  }
};

export const getFAQS = async () => {
  const data = await fetchData('/faq');
  return data.data;
};

export const getOptions = async () => {
  const data = await fetchData(`/options`);
  const { header, footer, home } = data;
  return {
    header,
    footer,
    home,
  };
};

export const getCategoriesList = async () => {
  const data = await fetchData('/categories-list');
  return data.data;
};

export const getBlogs = async (perPage: number, page: number) => {
  const query = new URLSearchParams({
    per_page: perPage.toString(),
    page: page.toString(),
  });
  return await fetchData(`/blogs?${query.toString()}`);
};

export const getCategoryBlogs = async (
  slug: string,
  perPage: number,
  page: number
) => {
  const query = new URLSearchParams({
    slug,
    per_page: perPage.toString(),
    page: page.toString(),
  });
  const {
    blogs,
    seo,
    totalPages,
    error,
    duration, // Include duration in the response
  } = await fetchData(`/blog-category?${query.toString()}`);
  return {
    blogs,
    seo,
    totalPages,
    error,
  };
};

export const getBlogBySlug = async (slug: string) => {
  return await fetchData(`/blog?slug=${slug}`);
};
