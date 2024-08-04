import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { getProjectCategories, getProjects } from '@/app/lib/Controller';
import ProjectsList from '@/app/Components/Organisms/ProjectsList';
import { Box } from '@mui/material';
import ProjectCategoryNav from '@/app/Components/Molecules/ProjectCategoryNav';

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
  const { projects, totalPages } = await getProjects(3, +page, category);
  const { success, data: categories } = await getProjectCategories();

  if (page > totalPages) {
    notFound();
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '4rem',
      }}
    >
      {success && <ProjectCategoryNav categories={categories} />}
      <ProjectsList
        list={projects}
        totalPages={+totalPages}
        currentPage={+page}
      />
    </Box>
  );
};

export default Projects;
