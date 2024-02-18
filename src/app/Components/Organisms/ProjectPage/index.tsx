'use client';

import { Box } from '@mui/material';
import { motion } from 'framer-motion';

import Text from '../../Atoms/Text';
import { useStyles } from './style';
import Image from '../../Atoms/Image';
import { MotionDelay, RowVariant } from '@/app/lib/MotionVariants';

type Props = {
  project: Project;
};

const ProjectPage = ({ project }: Props) => {
  const { classes } = useStyles();
  const { featured_media, content, title } = project;
  const {
    placeholder: { metadata },
    source_url,
  } = featured_media;

  return (
    <Box className={classes.container}>
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
