'use client';

import { Box } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from '@/navigation';
import { useStyles } from './style';

const SociaLinks = () => {
  const { classes } = useStyles();

  return (
    <Box className={classes.container}>
      <Link className={classes.link} href={'#' as '/'}>
        <FacebookIcon fontSize='small' />
      </Link>
      <Link className={classes.link} href={'#' as '/'}>
        <LinkedInIcon fontSize='small' />
      </Link>
      <Link className={classes.link} href={'#' as '/'}>
        <InstagramIcon fontSize='small' />
      </Link>
    </Box>
  );
};

export default SociaLinks;
