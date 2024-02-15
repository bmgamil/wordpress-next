import { makeStyles } from 'tss-react/mui';

type Props = {
  shadow?: boolean;
};

export const useStyles = makeStyles<Props>()((theme, props) => {
  return {
    img: {
      maxWidth: '100%',
      width: 'auto',
      height: 'auto',
      filter: props.shadow
        ? `drop-shadow(2px 2px 5px ${theme.palette.primary.dark})`
        : '',
    },
  };
});

export default useStyles;
