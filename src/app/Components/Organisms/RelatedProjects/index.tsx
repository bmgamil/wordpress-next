'use client';

import React from 'react';
import Carousel from '../Carousel';
import ProjectCard from '../ProjectCard';

type Props = {
  projects: Project[];
  title: string;
};

const RelatedProjects = (props: Props) => {
  const { projects, title } = props;

  return (
    <Carousel listLength={projects.length} title={title}>
      {projects.map((project, i) => {
        return (
          <div key={project.id} className='embla__slide'>
            <ProjectCard project={project} />
          </div>
        );
      })}
    </Carousel>
  );
};

export default RelatedProjects;
