'use client';

import { Link } from '@/navigation';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box } from '@mui/material';
import { useStyles } from './style';

type Props = {
  social: optionFooterLinks[];
};

const SocialLinks = (props: Props) => {
  const { classes } = useStyles();
  const { social } = props;
  return (
    <Box className={classes.container}>
      {social.map((link) => (
        <Link className={classes.link} href={link.url as any} key={link.text}>
          {link.text === 'Facebook' && <FacebookIcon fontSize='small' />}
          {link.text === 'LinkedIn' && <LinkedInIcon fontSize='small' />}
        </Link>
      ))}
    </Box>
  );
};

export default SocialLinks;
