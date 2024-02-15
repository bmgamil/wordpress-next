'use client';

import Text from '@/app/Components/Atoms/Text';
import { useStyles } from './styles';
import { Box } from '@mui/material';
type Props = {
  radius: BorderRadius;
  children: React.ReactNode;

  textColor: TextColor;
};

const RoundedTitle = (props: Props) => {
  const { children, radius, textColor } = props;
  const { classes } = useStyles({ radius, textColor });
  return (
    <Box className={classes.container}>
      <Text textColor={textColor} textWeight='medium'>
        {children}
      </Text>
    </Box>
  );
};

export default RoundedTitle;
