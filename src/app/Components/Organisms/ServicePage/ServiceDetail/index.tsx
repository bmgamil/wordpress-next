'use client';
import Image from '@/app/Components/Atoms/Image';
import Text from '@/app/Components/Atoms/Text';
import { Box, Grid } from '@mui/material';
import useStyles from './style';
import { useTranslations } from 'next-intl';
import ServiceFAQs from '../FAQs';
import { motion } from 'framer-motion';
import { RowVariant } from '@/app/lib/MotionVariants';
import RelatedProjects from '../../RelatedProjects';

type Props = {
  service: ServiceDetail;
};

const ServiceDetail = (props: Props) => {
  const {
    description: content,
    projects,
    name,
    acf: { featured_media, faq },
  } = {
    ...props.service,
  };
  const { source_url, media_details } = { ...featured_media };
  const { height, width } = { ...media_details };

  const { classes } = useStyles();
  const markup = { __html: content };
  const t = useTranslations('services');

  // if (!props.service) {
  //   return <div></div>;
  // }

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
            {name.replace('amp;', ' ')}
          </Text>
        </Box>
        {source_url && (
          <Box className={classes.Image}>
            <Image
              src={source_url}
              // placeholder='blur'
              // blurDataURL={placeholder.base64}
              alt={name}
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
      {projects && !!projects.length && (
        <Grid item xs={12}>
          <RelatedProjects projects={projects} title={t('related')} />
        </Grid>
      )}
    </>
  );
};

export default ServiceDetail;
