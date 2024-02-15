'use client';
import { Box } from '@mui/material';
import { useStyles } from './style';
import { useTranslations } from 'next-intl';
import WorkingStep from '../../Molecules/WorkingStep';

const WorkingStepsList = () => {
  const { classes } = useStyles();
  const t = useTranslations('home.steps.list');

  const WorkingSteps: WorkingStep[] = [
    {
      number: t('step_1.number'),
      title: t('step_1.title'),
      description: t('step_1.description'),
    },
    {
      number: t('step_2.number'),
      title: t('step_2.title'),
      description: t('step_2.description'),
    },
    {
      number: t('step_3.number'),
      title: t('step_3.title'),
      description: t('step_3.description'),
    },
  ];
  return (
    <Box className={classes.container}>
      {WorkingSteps.map((step, i) => {
        return (
          <WorkingStep
            description={step.description}
            number={step.number}
            title={step.title}
            key={step.title}
            index={i}
          />
        );
      })}
    </Box>
  );
};

export default WorkingStepsList;
