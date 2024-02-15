'use client';

import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { useTranslations } from 'next-intl';

import useStyles from './styles';
import Text from '@/app/Components/Atoms/Text';
import { ContactSchema } from '@/app/lib/Schema';
import Button from '@/app/Components/Atoms/Button';
import FormInput from '@/app/Components/Atoms/FormInput';
import { RowVariant } from '@/app/lib/MotionVariants';
import { contactSubmitHandler } from '@/app/lib/Controller';
import { useState } from 'react';

const ContactForm = () => {
  const { classes } = useStyles();
  const t = useTranslations('contact.form');
  const bt = useTranslations('buttons');
  const et = useTranslations('form_errors');
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactSubmission>({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    resolver: joiResolver(ContactSchema),
    defaultValues: {
      comment: '',
      email: '',
      name: '',
      phone: '',
      subject: '',
    },
  });

  const onSubmit = async (data: ContactSubmission) => {
    try {
      setLoading(true);
      const response = await contactSubmitHandler(data);

      if (response.ok) {
        reset();
      } else {
        throw new Error('error occured');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      className={classes.container}
      component={motion.section}
      variants={RowVariant}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.5 }}
    >
      <Text textColor='main' textSize='lg'>
        {t('title')}
      </Text>
      <Box
        component='form'
        className={classes.form}
        onSubmit={handleSubmit(onSubmit)}
        autoComplete='off'
      >
        <FormInput
          placeholder={t('name')}
          {...register('name')}
          error={!!errors.name}
          helperText={errors.name && et(errors.name.type as any)}
        />
        <FormInput
          type='email'
          placeholder={t('email')}
          {...register('email')}
          error={!!errors.email}
          helperText={errors.email && et(errors.email.type as any)}
        />
        <FormInput
          placeholder={t('phone')}
          {...register('phone')}
          error={!!errors.phone}
          helperText={errors.phone && et(errors.phone.type as any)}
        />
        <FormInput
          placeholder={t('subject')}
          {...register('subject')}
          error={!!errors.subject}
          helperText={errors.subject && et(errors.subject.type as any)}
        />
        <FormInput
          placeholder={t('comment')}
          {...register('comment')}
          error={!!errors.comment}
          helperText={errors.comment && et(errors.comment.type as any)}
          multiline
          rows={3}
        />
        <Button
          fontSize='base'
          textTrasfrom='capitalize'
          isBold
          type='submit'
          background='main'
          radius='2xl'
          disabled={loading}
        >
          {bt('send')}
        </Button>
      </Box>
    </Box>
  );
};

export default ContactForm;
