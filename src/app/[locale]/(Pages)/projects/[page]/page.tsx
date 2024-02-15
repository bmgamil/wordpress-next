import { notFound } from 'next/navigation';

import { getProjects } from '@/app/lib/Controller';
import ProjectsList from '@/app/Components/Organisms/ProjectsList';

type Props = {
  params: {
    page: string;
  };
};

const ProjectsPerPage = async ({ params }: Props) => {
  const pageNumber = params.page.replace('page_', '');
  const { projects, totalPages } = await getProjects(3, Number(pageNumber));

  if (+pageNumber > totalPages) {
    notFound();
  }

  return (
    <ProjectsList
      list={projects}
      totalPages={+totalPages}
      currentPage={+pageNumber}
    />
  );
};

export default ProjectsPerPage;
