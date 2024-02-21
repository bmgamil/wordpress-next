'use client';

import { Box, Grid } from '@mui/material';
import { useTranslations } from 'next-intl';
import { useRouter } from '@/navigation';

import Button from '../../Atoms/Button';
import { Link } from '@/navigation';
import ProjectCard from '../ProjectCard';
import Pagination from '../../Molecules/Pagination';
import { useStyles } from './style';
import { useEffect, useState } from 'react';
import LoadingCircular from '@/app/Components/Molecules/Loading/LoadingCircular';
type Props = {
  list: Project[];
  isLatestList?: boolean;
  totalPages?: number;
  currentPage?: number;
};

const ProjectsList = ({
  list,
  isLatestList,
  totalPages,
  currentPage,
}: Props) => {
  const t = useTranslations('buttons');
  const router = useRouter();
  const { classes } = useStyles();
  const [pageNumber, setPageNumber] = useState(currentPage ?? 0);
  const [loading, setLoading] = useState(false);

  const handlePagination = (value: number) => {
    setPageNumber((prev) => value);
    setLoading(true);
    router.push(`/projects?page=${value}` as any);
  };

  useEffect(() => {
    setLoading(false);
  }, [currentPage]);

  return (
    <Box className={classes.container}>
      <Grid container spacing={3} flexGrow={1}>
        {loading ? (
          <LoadingCircular />
        ) : (
          list.map((project, i) => {
            const isInteger =
              Number.isInteger((i + 1) / 3) || list.length === 1;

            return (
              <Grid key={project.id} item xs={12} md={isInteger ? 12 : 6}>
                <ProjectCard project={project} />
              </Grid>
            );
          })
        )}

        {isLatestList && (
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              a: {
                height: '100%',
                width: '100%',
              },
            }}
          >
            <div style={{ width: '100%', height: '100%' }}>
              <Link href={'/projects' as '/'}>
                <Button
                  background='light'
                  full
                  fullWidth
                  textColor='main'
                  textTrasfrom='capitalize'
                  disableRipple
                  radius='xl'
                  fontSize='lg'
                  isBold
                >
                  {t('explore')}
                </Button>
              </Link>
            </div>
          </Grid>
        )}
      </Grid>
      {totalPages && currentPage && (
        <Pagination
          total={totalPages}
          handleChange={handlePagination}
          currentPage={pageNumber}
        />
      )}
    </Box>
  );
};

export default ProjectsList;
