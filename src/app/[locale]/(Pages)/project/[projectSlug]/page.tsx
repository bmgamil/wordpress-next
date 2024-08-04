import { Container } from '@mui/material';

import { getProject } from '@/app/lib/Controller';
import ProjectPage from '@/app/Components/Organisms/ProjectPage';
import { Metadata } from 'next';

type Props = {
  params: {
    projectSlug: string;
  };
};

export const generateMetadata = async ({
  params: { projectSlug },
}: Props): Promise<Metadata> => {
  const project: Project = await getProject(projectSlug);
  const seo = project.seo;

  return {
    ...seo,
  };
};

const Category = async ({ params: { projectSlug } }: Props) => {
  const project = await getProject(projectSlug);
  return (
    <Container>
      <ProjectPage project={project} />
    </Container>
  );
};

export default Category;
