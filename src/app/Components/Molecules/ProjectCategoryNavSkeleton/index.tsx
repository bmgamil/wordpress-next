'use client';
import { List, Skeleton } from '@mui/material';
import { useStyles } from './style';

const ProjectCategoryNavSkeleton = () => {
  const { classes } = useStyles();

  return (
    <List className={classes.listContainer}>
      {Array.from(new Array(5)).map((_, index) => (
        <Skeleton
          key={index}
          variant='text'
          sx={{
            paddingBlock: '1rem',
            paddingInline: '3rem',
            borderRadius: '1rem',
          }}
        />
      ))}
    </List>
  );
};

export default ProjectCategoryNavSkeleton;
