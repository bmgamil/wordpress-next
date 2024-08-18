'use client';

import { useLocale } from 'next-intl';
import { useState, useTransition } from 'react';
import { useRouter, usePathname } from '@/navigation';
import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import Image from '@/app/Components/Atoms/Image';

export default function LocaleSwitcherSelect() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const locale = useLocale();
  const [currentLocale, setCurrentLocale] = useState(locale);

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
        labelId='locale-select'
        id='locale'
        MenuProps={{
          disableScrollLock: true,
        }}
        // @ts-ignore
        value={currentLocale}
        onChange={onSelectChange}
        sx={{
          '#locale': {
            padding: 0,
            paddingInlineEnd: '0.8rem',
          },
          fieldset: {
            border: 'none !important',
          },
        }}
        IconComponent={() =>
          currentLocale === 'ar' ? (
            <Image src='/image/eg.png' alt='eg' height={12} width={28} />
          ) : (
            <Image src='/image/uk.png' alt='uk' height={12} width={28} />
          )
        }
      >
        <MenuItem value={'en'}>EN</MenuItem>
        <MenuItem value={'ar'}>AR</MenuItem>
      </Select>
    </FormControl>
  );
}
