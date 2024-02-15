'use client';
import { default as MuiPagination } from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useLocale } from 'next-intl';
type Props = {
  total: number;
  handleChange: Function;
  currentPage: number;
};

const Pagination = ({ total, handleChange, currentPage }: Props) => {
  const locale = useLocale();
  const isAr = locale === 'ar';

  return (
    <MuiPagination
      count={total}
      color='primary'
      variant='outlined'
      page={currentPage}
      onChange={(_e, value) => handleChange(value)}
      renderItem={(item) => (
        <PaginationItem
          slots={{
            previous: isAr ? ArrowForwardIcon : ArrowBackIcon,
            next: isAr ? ArrowBackIcon : ArrowForwardIcon,
          }}
          {...item}
        />
      )}
    />
  );
};

export default Pagination;
