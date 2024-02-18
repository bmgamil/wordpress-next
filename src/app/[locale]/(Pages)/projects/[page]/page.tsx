import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { getProjects } from '@/app/lib/Controller';
import ProjectsList from '@/app/Components/Organisms/ProjectsList';

type Props = {
  params: {
    page: string;
  };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  const pageName = params.page.split('_');
  return {
    title: `Projects - Page ${pageName[1]} `,
  };
};

const ProjectsPerPage = async ({ params }: Props) => {
  const pageName = params.page.split('_');
  const { projects, totalPages } = await getProjects(3, +pageName[1]);

  if (
    pageName.length > 2 ||
    pageName[0] !== 'page' ||
    !Number.isInteger(+pageName[1]) ||
    +pageName[1] === 0 ||
    +pageName[1] > totalPages
  ) {
    notFound();
  }

  return (
    <ProjectsList
      list={projects}
      totalPages={+totalPages}
      currentPage={+pageName[1]}
    />
  );
};

export default ProjectsPerPage;
