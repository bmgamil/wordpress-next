import { makeStyles } from 'tss-react/mui';
type Props = {
  clearDrag?: boolean;
};

export const useStyles = makeStyles<Props>()((theme, props) => {
  const { clearDrag } = props;
  return {
    container: {
      maxWidth: clearDrag ? undefined : '100%',
      contain: clearDrag ? undefined : 'inline-size',
      userSelect: 'none',
      overflow: clearDrag ? undefined : 'hidden',
      cursor: clearDrag ? undefined : 'grab',
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
