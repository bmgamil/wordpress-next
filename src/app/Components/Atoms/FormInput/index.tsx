'use client';

import { forwardRef } from 'react';
import { TextField, TextFieldProps } from '@mui/material';
import useStyles from './style';
import { useLocale } from 'next-intl';

const FormInput = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
  // const locale = useLocale();
  // const isAr = locale === 'ar';
  const { classes } = useStyles();

  return (
    <TextField
      // dir={isAr ? 'rtl' : 'ltr'}
      className={classes.container}
      ref={ref}
      variant='outlined'
      size='small'
      margin='none'
      inputProps={{
        className: classes.field,
        // dir: isAr ? 'rtl' : 'ltr',
      }}
      InputLabelProps={{
        className: classes.label,
        // dir: isAr ? 'rtl' : 'ltr',
      }}
      FormHelperTextProps={{
        className: classes.helperText,
      }}
      {...props}
    />
  );
});

FormInput.displayName = 'FormInput';

export default FormInput;
