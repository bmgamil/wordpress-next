import { makeStyles } from 'tss-react/mui';

type Props = {
  hasDropdown?: boolean;
};

export const useStyles = makeStyles<Props>()((theme, props) => {
  const { hasDropdown } = props;
  return {
    container: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      textTransform: 'capitalize',
      [theme.breakpoints.down('md')]: {
        display: hasDropdown ? 'none' : undefined,
      },
    },

    dropdown: {
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
  };
});
