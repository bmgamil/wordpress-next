'use server';

import { redirect } from '@/navigation';

const Projects = () => {
  redirect('/projects/page_1' as any);
};

export default Projects;
