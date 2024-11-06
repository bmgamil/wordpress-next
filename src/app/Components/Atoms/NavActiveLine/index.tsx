'use client';

import { Box } from '@mui/material';
import { useLocale } from 'next-intl';

type Props = {
  left: number;
  width: number;
  listWidth?: number;
};

const NavActiveLine = (props: Props) => {
  const { left, width, listWidth } = props;
  const locale = useLocale();
  const isAr = locale === 'ar';
  const axis = isAr ? Number(listWidth) - left : left;
  const widthPrecentage = Math.ceil(width * 0.6);
  const axisPrecentage = Math.ceil(axis + width / 5);

  return (
    <Box
      sx={{
        position: 'absolute',
        transitionProperty: 'width, left,right',
        transitionDuration: '0.8s',
        transitionTimingFunction: 'cubic-bezier( 0.77, 0, 0.175, 1 )',
        backgroundColor: (theme) => theme.palette.primary.main,
        borderRadius: 4,
        right: isAr ? axisPrecentage : '',
        left: !isAr ? axisPrecentage : '',
        bottom: '0',
        width: widthPrecentage,
        height: 3,
        zIndex: 10,
        display: { xs: 'none', md: 'block' },
      }}
    />
  );
};

export default NavActiveLine;
