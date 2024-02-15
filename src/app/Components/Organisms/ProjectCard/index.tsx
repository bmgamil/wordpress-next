'use client';

import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { useStyles } from './style';
import Text from '../../Atoms/Text';
import Image from '../../Atoms/Image';

import TagsSlider from '../../Molecules/TagsSlider';
import { RowVariant } from '@/app/lib/MotionVariants';
import CustomLink from '../../Atoms/Link';

const ProjectCard = (props: { project: Project }) => {
  const {
    project: { featured_media, title, categories, slug },
  } = props;

  const {
    media_details,
    source_url,
    placeholder: {
      metadata,
      css,
      color: { b, g, r },
    },
  } = featured_media;

  const t = useTranslations('buttons');
  const { classes } = useStyles();

  return (
    <Box
      component={motion.div}
      variants={RowVariant}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      className={classes.container}
      sx={{
        ...css,
        backgroundColor: `rgba(${r},${g},${b},0.5)`,
      }}
    >
      <Box className={classes.header}>
        <Text variant='h4' textWeight='medium' textSize='lg'>
          {title}
        </Text>
        <TagsSlider mode='dark' tags={categories} />
      </Box>

      <Box className={classes.image}>
        <Image
          src={source_url}
          width={media_details.width}
          height={media_details.height}
          alt={title}
        />
      </Box>

      <CustomLink href={`/project/${slug}`} title={t('view')} />
    </Box>
  );
};

export default ProjectCard;
