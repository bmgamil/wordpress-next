'use client';

import { Box } from '@mui/material';
import { useEffect, useState } from 'react';

import Text from '../../Atoms/Text';
import { useStyles } from './style';
import { MotionDelay } from '@/app/lib/MotionVariants';
import { getRelatedProjects } from '@/app/lib/Controller';
import TagsSlider from '../../Molecules/TagsSlider';
import RelatedProjects from '../RelatedProjects';
import { useTranslations } from 'next-intl';

type Props = {
  project: Project;
};

const ProjectPage = ({ project }: Props) => {
  const { classes } = useStyles();
  const t = useTranslations('services');
  const [relatedProjects, setRelatedProjects] = useState<Project[]>([]);
  const { featured_media, content, categories, id, title } = project;
  const {
    placeholder: { metadata },
    source_url,
  } = featured_media;

  const handleRelatedProjects = async () => {
    try {
      const response = await getRelatedProjects(id);
      if (response.success) {
        setRelatedProjects(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleRelatedProjects();
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
      {/* <Box
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
      </Box> */}
      <div dangerouslySetInnerHTML={{ __html: content }} />
      {!!relatedProjects.length && (
        <RelatedProjects projects={relatedProjects} title={t('related')} />
      )}
    </Box>
  );
};

export default ProjectPage;
