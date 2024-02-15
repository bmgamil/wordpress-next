'use client';

import Button from '@/app/Components/Atoms/Button';
import Text from '@/app/Components/Atoms/Text';
import { Box } from '@mui/material';
import { useTranslations } from 'next-intl';

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  const t = useTranslations();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        textTransform: 'capitalize',
      }}
    >
      <Text textWeight='medium' textSize='2xl'>
        {t('error')}
      </Text>

      <Button onClick={reset} background='main' endIcon={undefined} radius='xl'>
        {t('buttons.try')}
      </Button>
    </Box>
  );
};

export default Error;
