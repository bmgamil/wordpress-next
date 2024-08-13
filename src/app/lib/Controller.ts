export const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getProjects = async (
  perPage?: number,
  page?: number,
  slug?: string
) => {
  const _perPage = perPage ? `per_page=${perPage}` : '';
  const _page = page ? `&page=${page}` : '';
  const _slug = slug ? `&types_cat_slug=${slug}` : '';

  try {
    const response = await fetch(
      `${API_URL}/projects?${_perPage}${_page}${_slug}`,
      {
        next: { revalidate: 5 },
      }
    );
    const data = await response.json();
    return {
      projects: data.projects,
      totalPages: data.totalPages,
      error: null,
    };
  } catch (error) {
    return {
      projects: null,
      error: error,
    };
  }
};

export const getProjectCategories = async () => {
  try {
    const response = await fetch(`${API_URL}/projectCategories`);
    const data = await response.json();

    return {
      success: true,
      data,
    };
  } catch (error) {
    return {
      success: false,
    };
  }
};

export const getRelatedProjects = async (id: number) => {
  try {
    const response = await fetch(`${API_URL}/relatedProjects?id=${id}`);
    const data = await response.json();

    return {
      success: true,
      data,
    };
  } catch (error) {
    return {
      success: false,
    };
  }
};

export const getServices = async (slug?: string) => {
  const _slug = slug ? `?slug=${slug}` : '';
  try {
    const response = await fetch(`${API_URL}/services${_slug}`, {
      next: { revalidate: 5 },
    });
    const data = await response.json();
    return {
      services: data,
      error: null,
    };
  } catch (error) {
    return {
      services: null,
      error: error,
    };
  }
};
export const getProject = async (slug: string) => {
  try {
    const response = await fetch(`${API_URL}/project?slug=${slug}`, {
      next: { revalidate: 5 },
    });
    return await response.json();
  } catch (error) {
    return error;
  }
};

export const contactSubmitHandler = async (data: ContactSubmission) => {
  const response = fetch(
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
};

export const getFAQS = async () => {
  try {
    const response = await fetch(`${API_URL}/faqs`, {
      next: { revalidate: 5 },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const getOptions = async () => {
  try {
    const response = await fetch(`${API_URL}/options`, {
      next: { revalidate: 5 },
    });
    return await response.json();
  } catch (error) {
    return error;
  }
};

export const getCategoriesList = async () => {
  try {
    const response = await fetch(`${API_URL}/blogs-categories`, {
      next: { revalidate: 5 },
    });
    return await response.json();
  } catch (error) {
    return error;
  }
};

export const getBlogs = async (perPage: number, page: number) => {
  const _perPage = `per_page=${perPage}`;
  const _page = `&page=${page}`;
  try {
    const response = await fetch(`${API_URL}/blogs?${_perPage}${_page}`, {
      next: { revalidate: 5 },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const getCategoryBlogs = async (
  slug: string,
  perPage: number,
  page: number
) => {
  const _slug = `slug=${slug}`;
  const _perPage = `&per_page=${perPage}`;
  const _page = `&page=${page}`;
  try {
    const response = await fetch(
      `${API_URL}/blog-category?${_slug}${_perPage}${_page}`,
      {
        next: { revalidate: 5 },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const getBlogBySlug = async (slug: string) => {
  const _slug = `slug=${slug}`;

  try {
    const response = await fetch(`${API_URL}/blog?${_slug}`, {
      next: { revalidate: 5 },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};
