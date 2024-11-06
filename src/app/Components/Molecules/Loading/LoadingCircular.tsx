'use client';

import { Box } from '@mui/material';
import Logo from '../../Atoms/Logo';
import Text from '../../Atoms/Text';
import { useTranslations } from 'next-intl';

const LoadingCircular = () => {
  const t = useTranslations();
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Logo />
      <Text
        textSize='lg'
        textWeight='medium'
        hasGradientBG
        textTransform='capitalize'
      >
        {t('loading')}
      </Text>
    </Box>
  );
};

export default LoadingCircular;
