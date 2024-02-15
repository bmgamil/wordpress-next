import { Container } from '@mui/material';

import { getProject } from '@/app/lib/Controller';
import ProjectPage from '@/app/Components/Organisms/ProjectPage';

type Props = {
  params: {
    projectSlug: string;
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
