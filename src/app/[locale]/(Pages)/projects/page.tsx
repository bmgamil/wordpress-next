import { Metadata } from 'next';

import ProjectCategoryNav from '@/app/Components/Molecules/ProjectCategoryNav';
import ProjectsList from '@/app/Components/Organisms/ProjectsList';
import { getProjectCategories, getProjects } from '@/app/lib/Controller';
import { Box } from '@mui/material';

type Props = {
  searchParams: { page?: string; category?: string };
};

export const generateMetadata = ({ searchParams }: Props): Metadata => {
  const page = searchParams.page ?? 1;
  return {
    title: `Projects - Page ${page} `,
  };
};

const Projects = async ({ searchParams }: Props) => {
  const page = searchParams.page ?? 1;
  const category = searchParams.category;

  const [projectsResponse, categoriesResponse] = await Promise.all([
    getProjects(6, +page, category),
    getProjectCategories(),
  ]);

  const { projects, totalPages } = projectsResponse;
  const { success, data: categories } = categoriesResponse;

  // if (page > totalPages) {
  //   notFound();
  // }
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '4rem',
      }}
    >
      {success && categories && <ProjectCategoryNav categories={categories} />}
      <ProjectsList
        list={projects}
        totalPages={+totalPages}
        currentPage={+page}
      />
    </Box>
  );
};

export default Projects;
