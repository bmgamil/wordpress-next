'use client';

import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { useStyles } from './style';
import Text from '../../Atoms/Text';
import Image from '../../Atoms/Image';
import CustomLink from '../../Atoms/Link';
import TagsSlider from '../../Molecules/TagsSlider';
import { RowVariant } from '@/app/lib/MotionVariants';
import { Link } from '@/navigation';

const ProjectCard = (props: { project: Project }) => {
  const {
    project: { featured_media, title, categories, slug },
  } = props;

  const { media_details, source_url } = featured_media;

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
      layout
      // sx={{
      //   ...css,
      //   backgroundColor: `rgba(${r},${g},${b},0.5)`,
      // }}
    >
      <Box className={classes.header}>
        <Link href={`/projects/${slug}` as any}>
          <Text variant='h4' textWeight='medium' textSize='lg'>
            {title}
          </Text>
        </Link>
        <TagsSlider mode='dark' tags={categories} />
      </Box>

      <Box className={classes.image}>
        <Image
          src={source_url}
          width={media_details.width}
          height={media_details.height}
          alt={title}
          placeholder='blur'
          blurDataURL='data:image/svg+xml;base64,LGhlaWdodCBjYXJkIHN0eWxl'
        />
      </Box>

      <CustomLink
        className={classes.link}
        href={`/projects/${slug}`}
        title={t('view')}
      />
    </Box>
  );
};

export default ProjectCard;
