import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { getProjects } from '@/app/lib/Controller';
import ProjectsList from '@/app/Components/Organisms/ProjectsList';

type Props = {
  searchParams: { page?: string };
};

export const generateMetadata = ({ searchParams }: Props): Metadata => {
  const page = searchParams.page;
  return {
    title: `Projects - Page ${page} `,
  };
};

const Projects = async ({ searchParams }: Props) => {
  const page = searchParams.page ?? 1;
  const { projects, totalPages } = await getProjects(3, +page);

  if (page > totalPages) {
    notFound();
  }

  return (
    <ProjectsList
      list={projects}
      totalPages={+totalPages}
      currentPage={+page}
    />
  );
};

export default Projects;
