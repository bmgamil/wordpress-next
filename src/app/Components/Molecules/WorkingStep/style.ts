import { makeStyles } from 'tss-react/mui';

type Props = {
  isHovered: boolean;
};

export const useStyles = makeStyles<Props>()((theme, props) => {
  const { isHovered } = props;
  const transitionDuration = '0.3s';
  const transitionTimingFunction = 'ease-in-out';

  return {
    container: {
      padding: '1.5rem 1rem',
      backgroundColor: isHovered
        ? theme.palette.primary.main
        : theme.palette.grey[100],
      boxShadow: theme.shadows[4],
      color: isHovered
        ? theme.palette.primary.light
        : theme.palette.primary.dark,
      transitionProperty: 'background-color, color',
      transitionDuration,
      transitionTimingFunction,
      borderRadius: '1rem',
    },
    innerContainer: {
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
      alignItems: 'baseline',
      gap: '1rem',
      '& > div:nth-of-type(1)': {
        borderColor: isHovered ? 'transparent' : theme.palette.primary.dark,

        backgroundColor: !isHovered
          ? 'transparent'
          : theme.palette.primary.light,
        transitionProperty: 'background-color,borderColor',
        transitionDuration,
        transitionTimingFunction,
        p: {
          color: isHovered
            ? theme.palette.primary.main
            : theme.palette.primary.dark,
          transitionProperty: 'color',
          transitionDuration,
          transitionTimingFunction,
        },
      },
    },
    body: {
      display: 'grid',
      gridTemplateRows: isHovered ? 'auto 1fr' : 'auto 0fr',
      gap: '0.5rem',
      transition: 'grid-template-rows 0.3s ease-in-out',
      '& :nth-child(2)': {
        overflow: 'hidden',
      },
    },
  };
});
