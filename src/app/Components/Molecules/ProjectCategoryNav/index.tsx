'use client';
import { Box, List } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useRouter } from '@/navigation';
import { useStyles } from './styles';
import NavLink from '../../Atoms/NavLink';
import NavActiveLine from '../../Atoms/NavActiveLine';
import Dropdown from '../Dropdown';
import Tag from '../../Atoms/Tag';

type Props = {
  categories: ProjectCategory[];
};

const ProjectCategoryNav = (props: Props) => {
  const { categories } = props;
  const { classes } = useStyles();
  const category = useSearchParams().get('category') ?? '';
  // const [activeLine, setActiveLine] = useState({ width: 0, left: 0 });
  const [currentValue, setCurrentValue] = useState('');

  const listRef = useRef<HTMLUListElement>(null);
  // const setActiveLineDimenstions = (left: number, width: number) => {
  //   setActiveLine({ left, width });
  // };
  const router = useRouter();

  const categoriesList: ProjectCategory[] = [
    {
      id: 0,
      slug: '',
      title: 'all',
    },
    ...categories,
  ];

  // const listWidth = listRef?.current?.offsetWidth;

  useEffect(() => {
    const value = categories.find((item) => item.slug === category)?.title;
    setCurrentValue(value ?? 'all');
  }, []);

  return (
    <>
      <Dropdown
        className={classes.dropdown}
        hasAll
        list={categories}
        currentValue={currentValue.replace('#038;', '')}
        onChange={(slug, value) => {
          const url: any = slug ? `?category=${slug}` : '/projects';
          setCurrentValue(value);
          router.push(url);
        }}
      />

      <List className={classes.listContainer} ref={listRef}>
        {categoriesList.map((navlink, i) => {
          let isActive = false;
          if (navlink.slug === category) {
            isActive = true;
          }

          const link = navlink.slug ? `?category=${navlink.slug}` : '/projects';
          return (
            <Tag
              key={navlink.title}
              mode={isActive ? 'dark' : 'light'}
              color='light'
              href={link}
              onClick={() => navlink.title && setCurrentValue(navlink.title)}
            >
              {navlink.title && navlink.title.replace('#038;', '')}
            </Tag>
            // <NavLink
            //   to={link}
            //   key={navlink.title}
            //   isActive={isActive}
            //   setActiveLine={setActiveLineDimenstions}
            //   fontSize='base'
            //   index={i}
            //   currentActive={category}
            //   onClick={() => {
            //     navlink.title && setCurrentValue(navlink.title);
            //   }}
            //   isProjectCate
            // >
            //   {navlink.title && navlink.title.replace('#038;', '')}
            // </NavLink>
          );
        })}
        {/* <NavActiveLine
          left={activeLine.left}
          width={activeLine.width}
          listWidth={listWidth}
        /> */}
      </List>
    </>
  );
};

export default ProjectCategoryNav;
