'use client';
import { Box, Grid } from '@mui/material';

import useStyles from './styles';

type Props = {
  children?: React.ReactNode;
};

const PageIntroText = (props: Props) => {
  const { children } = props;

  const { classes } = useStyles();

  return (
    <Grid container className={classes.container} component='section'>
      <Box className={classes.heading} component='h1'>
        {children}
      </Box>
    </Grid>
  );
};

export default PageIntroText;
