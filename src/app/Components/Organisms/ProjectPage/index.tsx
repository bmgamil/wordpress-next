'use client';

import { Box } from '@mui/material';

import Text from '../../Atoms/Text';
import { useStyles } from './style';
import { MotionDelay } from '@/app/lib/MotionVariants';
import TagsSlider from '../../Molecules/TagsSlider';
import RelatedProjects from '../RelatedProjects';
import { useTranslations } from 'next-intl';

type Props = {
  project: Project;
};

const ProjectPage = ({ project }: Props) => {
  const { classes } = useStyles();
  const t = useTranslations('services');
  const { content, categories, title, related_projects } = project;

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

      <div dangerouslySetInnerHTML={{ __html: content }} />
      {!!related_projects?.length && (
        <RelatedProjects projects={related_projects} title={t('related')} />
      )}
    </Box>
  );
};

export default ProjectPage;
