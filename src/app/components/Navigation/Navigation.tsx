import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../assets/HomeIcon';
import PlusIcon from '../assets/PlusIcon';
import UserIcon from '../assets/UserIcon';
import styles from './Navigation.module.css';

export type Navigationprops = {
  activeLink: 'home' | 'add' | 'user';
  onClick?: () => void;
};

function Navigation({ activeLink }: Navigationprops): JSX.Element {
  const active = {
    stroke: 'var(--color-primary)',
  };

  const inactive = {
    stroke: 'var(--text-primary)',
  };

  return (
    <nav className={`${styles.navigation}`}>
      <Link to="/">
        <HomeIcon
          className={styles.home}
          {...(activeLink === 'home' ? active : inactive)}
        />
      </Link>
      <Link to="/add">
        <PlusIcon
          className={styles.search}
          {...(activeLink === 'add' ? active : inactive)}
        />
      </Link>
      <Link to="/user">
        <UserIcon
          className={styles.user}
          {...(activeLink === 'user' ? active : inactive)}
        />
      </Link>
    </nav>
  );
}

export default Navigation;
