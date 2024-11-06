export const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const IS_CACHING = process.env.NEXT_IS_CACHING === 'true';

import { revalidate } from '@/app/lib/data';

const fetchData = async (endpoint: string, options = {}) => {
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

  const data = await fetchData(`/projects?${query.toString()}`);
  return {
    projects: data.projects,
    totalPages: data.totalPages,
    error: data.error || null,
  };
};

export const getProjectCategories = async () => {
  const data = await fetchData('/projectCategories');
  return {
    success: !data.error,
    data: data.error ? null : data,
  };
};

export const getRelatedProjects = async (id: number) => {
  const data = await fetchData(`/relatedProjects?id=${id}`);
  return {
    success: !data.error,
    data: data.error ? null : data,
  };
};

export const getServices = async (slug?: string) => {
  const endpoint = slug ? `/services?slug=${slug}` : '/services';
  const data = await fetchData(endpoint);
  console.log(data.duration);
  return {
    services: data.error ? null : data,
    error: data.error || null,
  };
};

export const getProject = async (slug: string) => {
  return await fetchData(`/project?slug=${slug}`);
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
  return await fetchData('/faqs');
};

export const getOptions = async (lang: string) => {
  return await fetchData(`/options?lang=${lang}`);
};

export const getCategoriesList = async () => {
  return await fetchData('/blogs-categories');
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
  return await fetchData(`/blog-category?${query.toString()}`);
};

export const getBlogBySlug = async (slug: string) => {
  return await fetchData(`/blog?slug=${slug}`);
};
