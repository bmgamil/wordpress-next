'use client';

import { useLocale } from 'next-intl';
import { useState, useTransition } from 'react';
import { useRouter, usePathname } from '@/navigation';
import {
  Box,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import Image from '@/app/Components/Atoms/Image';
import Text from '../../Atoms/Text';
import { useStyles } from './style';
import { Cairo } from '@/app/theme/theme';

export default function LocaleSwitcherSelect() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const locale = useLocale();
  const [currentLocale, setCurrentLocale] = useState(locale);
  const { classes } = useStyles();

  function onSelectChange(event: SelectChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale as any });
    });
    setCurrentLocale(nextLocale as string);
  }

  return (
    <FormControl>
      <Select
        name='locale'
        labelId='locale-select'
        id='locale'
        MenuProps={{
          disableScrollLock: true,
        }}
        // @ts-ignore
        value={currentLocale}
        onChange={onSelectChange}
        size='small'
        sx={{
          '#locale': {
            padding: 0,
            paddingInlineEnd: '0.8rem',
          },
          fieldset: {
            border: 'none !important',
          },
        }}
        IconComponent={() => undefined}
      >
        <MenuItem value={'en'}>
          <Box className={classes.menuItem}>
            <Text color='#fff'>EN</Text>
            <Image
              src='/image/English_language.png'
              alt='english language'
              height={600}
              width={900}
            />
          </Box>
        </MenuItem>
        <MenuItem value={'ar'}>
          <Box className={classes.menuItem}>
            <Text color='#fff' fontFamily={Cairo.style.fontFamily}>
              ع
            </Text>
            <Image
              src='/image/Flag_of_the_Arabic_language.png'
              alt='اللغة العربية'
              height={600}
              width={900}
            />
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  );
}
