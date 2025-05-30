'use client';

import Image from '@/app/Components/Atoms/Image';
import { Cairo } from '@/app/theme/theme';
import { usePathname, useRouter } from '@/navigation';
import TranslateIcon from '@mui/icons-material/Translate';
import {
  Box,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { useLocale } from 'next-intl';
import { useState } from 'react';
import Text from '../../Atoms/Text';
import { useStyles } from './style';

export default function LocaleSwitcherSelect() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const [currentLocale, setCurrentLocale] = useState<string>(locale);
  const { classes } = useStyles();

  function onSelectChange(event: SelectChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;
    router.push(pathname, { locale: nextLocale as any });
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
        renderValue={(value) => (
          <Box className={classes.menuItem}>
            <Text
              fontFamily={
                `${value}` === 'ar' ? Cairo.style.fontFamily : undefined
              }
              color='#fff'
            >
              {`${value}` === 'ar' ? 'ع' : 'EN'}
            </Text>
          </Box>
        )}
        value={currentLocale as unknown as ''}
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
        IconComponent={() => <TranslateIcon />}
      >
        <MenuItem value={'en'}>
          <Box className={classes.menuItem}>
            <Text color='#fff'>EN</Text>
            <Image
              src='/image/English_lang.png'
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
