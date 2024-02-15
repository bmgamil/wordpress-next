'use client';
import { svgVariants, PathVariants } from '@/app/lib/MotionVariants';
import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <motion.svg
      xmlns='http://www.w3.org/2000/svg'
      width='47'
      height='46'
      viewBox='0 0 47 46'
      fill='none'
      variants={svgVariants}
      initial='hidden'
      animate='visible'
    >
      <motion.path
        id='Vector'
        d='M22.9885 4.92599V13.6735L15.4347 18.0472L7.88086 13.6735V4.92599L15.4347 0.552246L22.9885 4.92599Z'
        fill='#F37820'
        variants={PathVariants}
        initial='hidden'
        animate='visible'
        custom={0}
      />
      <motion.path
        id='Vector_2'
        d='M38.7463 4.92599V13.6735L31.1925 18.0472L23.6387 13.6735V4.92599L31.1925 0.552246L38.7463 4.92599Z'
        fill='#F37820'
        variants={PathVariants}
        initial='hidden'
        animate='visible'
        custom={1}
      />
      <motion.path
        id='Vector_3'
        d='M7.55382 14.2688L15.1076 18.6425V27.3853L12.6396 28.8151L7.54915 31.7638L0 27.3853V18.6425L7.55382 14.2688Z'
        fill='#F37820'
        variants={PathVariants}
        initial='hidden'
        animate='visible'
        custom={2}
      />
      <motion.path
        id='Vector_4'
        d='M46.6272 18.6425V27.3853L39.078 31.7638H39.0734L33.9829 28.8151L31.5195 27.3853V18.6425L39.0734 14.2688L46.6272 18.6425Z'
        fill='#F37820'
        variants={PathVariants}
        initial='hidden'
        animate='visible'
        custom={3}
      />
      <motion.path
        id='Vector_5'
        d='M22.9885 32.3264V41.0739L15.4347 45.4476L7.88086 41.0739V32.3264L15.4347 27.9526L22.9885 32.3264Z'
        fill='#F37820'
        variants={PathVariants}
        initial='hidden'
        animate='visible'
        custom={4}
      />
      <motion.path
        id='Vector_6'
        d='M38.7463 32.3264V41.0739L31.1925 45.4476L23.6387 41.0739V32.3264L31.1925 27.9526L38.7463 32.3264Z'
        fill='#F37820'
        variants={PathVariants}
        initial='hidden'
        animate='visible'
        custom={5}
      />
    </motion.svg>
  );
};

export default Logo;
