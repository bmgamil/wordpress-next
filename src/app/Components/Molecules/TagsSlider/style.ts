import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
  return {
    container: {
      maxWidth: '100%',
      userSelect: 'none',
      overflow: 'hidden',
      cursor: 'grab',
    },
    innerContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      paddingBlock: '0.3rem',
      paddingInlineEnd: '0.5rem',
    },
  };
});
