'use client';

import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import useStyles from './style';
import { useRouter } from '@/navigation';
import Text from '@/app/Components/Atoms/Text';
import Button from '@/app/Components/Atoms/Button';
import { MotionDelay, RowVariant } from '@/app/lib/MotionVariants';
import SectionRoundedTitle from '@/app/Components/Molecules/SectionRoundedTitle';
import ProjectsList from '../../ProjectsList';

type Props = {
  list: Project[];
  workOptions: options['home']['ourWork'];
};

const HomeProjects = (props: Props) => {
  const t = useTranslations('home.projects');
  const bt = useTranslations('buttons');
  const { classes } = useStyles();
  const router = useRouter();
  const {
    list,
    workOptions: { description, title },
  } = props;

  const navigateToProjects = () => {
    router.push('/projects' as '/pathnames');
  };

  return (
    <Box
      component='section'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
      }}
    >
      <Box className={classes.header}>
        <SectionRoundedTitle
          number={t('number')}
          title={t('title')}
          textColor='light'
        />

        <Text
          textSize='3xl'
          textTransform='capitalize'
          hasGradientBG
          textWeight='medium'
          animate
          delay={MotionDelay.sm}
        >
          {title}
        </Text>
        <Text animate delay={MotionDelay.md}>
          {description}
        </Text>
        <Button
          background='main'
          onClick={() => navigateToProjects()}
          radius='2xl'
          isBold
          component={motion.div}
          variants={RowVariant}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.8 }}
          custom={4}
        >
          {bt('view')}
        </Button>
      </Box>
      <ProjectsList list={list} isLatestList />
    </Box>
  );
};

export default HomeProjects;
