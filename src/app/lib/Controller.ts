export const getProjects = async (perPage?: number, page?: number) => {
  const _perPage = perPage ? `per_page=${perPage}` : '';
  const _page = page ? `&page=${page}` : '';

  try {
    const response = await fetch(
      `http://localhost:3000/api/projects?${_perPage}${_page}`,
      {
        cache: 'force-cache',
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

export const getServices = async (slug?: string) => {
  const _slug = slug ? `?slug=${slug}` : '';
  try {
    const response = await fetch(`http://localhost:3000/api/services${_slug}`, {
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
    const response = await fetch(
      `http://localhost:3000/api/project?slug=${slug}`,
      {
        next: { revalidate: 5 },
      }
    );
    return await response.json();
  } catch (error) {
    return {
      services: null,
      error: error,
    };
  }
};

export const getBlogs = async (pageNumber: number) => {};

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
