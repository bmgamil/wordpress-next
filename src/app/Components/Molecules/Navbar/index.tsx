'use client';
import { List } from '@mui/material';
import { useRef, useState } from 'react';
import { useTranslations } from 'next-intl';

import { useStyles } from './styles';
import NavLink from '../../Atoms/NavLink';
import { navlinks } from '@/app/lib/data';
import { usePathname } from '@/navigation';
import NavActiveLine from '../../Atoms/NavActiveLine';

type Props = {
  services: ServiceDetail[];
  setIsOpen: Function;
};

const Navbar = ({ setIsOpen, services }: Props) => {
  const { classes } = useStyles();
  const pathname = usePathname();
  const [activeLine, setActiveLine] = useState({ width: 0, left: 0 });

  const t = useTranslations('header.navbar');
  const listRef = useRef<HTMLUListElement>(null);
  const setActiveLineDimenstions = (left: number, width: number) => {
    setActiveLine({ left, width });
  };

  const listWidth = listRef?.current?.offsetWidth;

  return (
    <List className={classes.container} ref={listRef}>
      {navlinks.map((navlink, i) => {
        let isActive = false;
        if (i === 0) {
          if (navlink.link === '/' && pathname === '/') {
            isActive = true;
          }
        } else {
          if (pathname.startsWith(navlink.link)) {
            isActive = true;
          } else {
            isActive = false;
          }
        }

        return (
          <NavLink
            to={`${navlink.link}`}
            key={navlink.title}
            isActive={isActive}
            setActiveLine={setActiveLineDimenstions}
            fontSize='base'
            currentActive={pathname}
            index={i}
            onPointerUp={() => navlink.title !== 'service' && setIsOpen(false)}
            hasIcon
            menu={navlink.title === 'service' ? services : undefined}
            menuBaseUrl='/service'
          >
            {t(navlink.title as any)}
          </NavLink>
        );
      })}
      <NavActiveLine
        left={activeLine.left}
        width={activeLine.width}
        listWidth={listWidth}
      />
    </List>
  );
};

export default Navbar;
