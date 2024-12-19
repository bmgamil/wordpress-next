import { Container } from '@mui/material';

import '@/../public/style/style.css';
import ProjectPage from '@/app/Components/Organisms/ProjectPage';
import { getProject } from '@/app/lib/Controller';
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
  // const locale = await getLocale();

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
