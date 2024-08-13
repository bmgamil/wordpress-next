'use client';

import { ReactNode, useState, useTransition } from 'react';
import { useRouter, usePathname } from '../../../../navigation';
import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { useLocale } from 'next-intl';

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};

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
        labelId='demo-simple-select-label'
        id='demo-simple-select'
        // @ts-ignore
        value={currentLocale}
        onChange={onSelectChange}
      >
        <MenuItem value={'en'}>en</MenuItem>
        <MenuItem value={'ar'}>ar</MenuItem>
      </Select>
    </FormControl>
  );
}
