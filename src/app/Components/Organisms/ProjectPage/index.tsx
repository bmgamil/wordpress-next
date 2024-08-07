'use client';

import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import Text from '../../Atoms/Text';
import { useStyles } from './style';
import Image from '../../Atoms/Image';
import { MotionDelay, RowVariant } from '@/app/lib/MotionVariants';
import { getRelatedProjects } from '@/app/lib/Controller';
import TagsSlider from '../../Molecules/TagsSlider';

type Props = {
  project: Project;
};

const ProjectPage = ({ project }: Props) => {
  const { classes } = useStyles();
  const [relatedProjects, setRelatedProjects] = useState<Project[]>([]);
  const { featured_media, content, title, categories, id } = project;
  const {
    placeholder: { metadata },
    source_url,
  } = featured_media;

  const handleRelatedProjects = async () => {
    try {
      const response = await getRelatedProjects(id, title);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // handleRelatedProjects();
  }, []);

  return (
    <Box className={classes.container}>
      <Box>
        <TagsSlider clearDrag mode='light' tags={categories} />
      </Box>
      <Text
        textTransform='capitalize'
        textSize='3xl'
        hasGradientBG
        textWeight='medium'
        animate
        delay={MotionDelay.xs}
        textAlign='center'
      >
        {title.replace('#038;', '')}
      </Text>
      <Box
        className={classes.image}
        component={motion.div}
        variants={RowVariant}
        initial='hidden'
        animate='visible'
        custom={4}
        // viewport={{ once: true, amount: 0.2 }}
      >
        <Image
          src={source_url}
          width={metadata.width}
          height={metadata.height}
          alt={title}
        />
      </Box>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Box>
  );
};

export default ProjectPage;
