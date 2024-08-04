'use client';
import Image from '@/app/Components/Atoms/Image';
import Text from '@/app/Components/Atoms/Text';
import { Box, Grid } from '@mui/material';
import useStyles from './style';
import Carousel from '../../Carousel';
import ProjectCard from '../../ProjectCard';
import { useTranslations } from 'next-intl';
import ServiceFAQs from '../FAQs';
import { motion } from 'framer-motion';
import { RowVariant } from '@/app/lib/MotionVariants';

type Props = {
  service: ServiceDetail;
};

const ServiceDetail = (props: Props) => {
  const { content, projects, title, featured_media, faq } = {
    ...props.service,
  };
  const { source_url, media_details, placeholder } = { ...featured_media };
  const { height, width } = { ...media_details };

  const { classes } = useStyles();
  const markup = { __html: content };
  const t = useTranslations('services');

  if (!props.service) {
    return <div></div>;
  }

  return (
    <>
      <Grid
        item
        xs={12}
        md={8}
        className={classes.container}
        component={motion.section}
        variants={RowVariant}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.2 }}
      >
        <Box className={classes.Title}>
          <Text textSize='xl' textWeight='medium'>
            {title.replace('#038;', '')}
          </Text>
        </Box>
        {source_url && (
          <Box className={classes.Image}>
            <Image
              src={source_url}
              placeholder='blur'
              blurDataURL={placeholder.base64}
              alt={title}
              width={width}
              height={height}
            />
          </Box>
        )}
        {content && (
          <div className={classes.content} dangerouslySetInnerHTML={markup} />
        )}
      </Grid>
      <Grid item xs={12}>
        <ServiceFAQs list={faq} />
      </Grid>
      {!!projects.length && (
        <Grid item xs={12}>
          <Carousel listLength={projects.length} title={t('related')}>
            {projects.map((project, i) => {
              return (
                <div key={project.id} className='embla__slide'>
                  <ProjectCard project={project} />
                </div>
              );
            })}
          </Carousel>
        </Grid>
      )}
    </>
  );
};

export default ServiceDetail;
