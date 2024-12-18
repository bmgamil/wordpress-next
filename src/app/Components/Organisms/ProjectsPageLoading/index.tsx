'use client';
import { Box, Grid } from '@mui/material';
import ProjectSkeleton from '../../Molecules/ProjectSkeleton';
import ProjectCategoryNavSkeleton from '../../Molecules/ProjectCategoryNavSkeleton';

const ProjectsPageLoading = () => {
  return (
    <Box>
      <ProjectCategoryNavSkeleton />
      <Grid container spacing={2}>
        {Array.from(Array(3)).map((_item, i) => {
          return (
            <Grid key={i} item xs={12} md={i === 2 ? 12 : 6}>
              <ProjectSkeleton index={i} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default ProjectsPageLoading;
