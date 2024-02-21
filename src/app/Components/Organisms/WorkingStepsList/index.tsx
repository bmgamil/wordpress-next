'use client';
import { Box } from '@mui/material';
import { useStyles } from './style';
import WorkingStep from '../../Molecules/WorkingStep';
import { Dispatch, SetStateAction } from 'react';

type Props = {
  steps: options['home']['steps'];
  selectorIndex: number;
  setSelectorIndex: Dispatch<SetStateAction<number>>;
};

const WorkingStepsList = (props: Props) => {
  const { selectorIndex, setSelectorIndex, steps } = props;
  const { classes } = useStyles();

  return (
    <Box className={classes.container}>
      {steps.map((step, i) => {
        return (
          <WorkingStep
            description={step.description}
            number={i + 1}
            title={step.title}
            key={step.title}
            index={i}
            selectorIndex={selectorIndex}
            setSelectorIndex={setSelectorIndex}
          />
        );
      })}
    </Box>
  );
};

export default WorkingStepsList;
