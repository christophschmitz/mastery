import React from 'react';
import Typography from '../Typography/Typography';
import styles from './Header.module.css';
import ChevronLeft from '../assets/ChevronLeft';
import Logo from '../assets/Logo';

export type HeaderProps = {
  type: 'home' | 'detail' | 'breadcrumbs' | 'backwithimage' | 'justback';
  title?: string;
  imageSrc?: string;
  onClick?: () => void;
};

const Header = ({
  type,
  title,
  imageSrc,
  onClick,
}: HeaderProps): JSX.Element => {
  if (type === 'home') {
    return (
      <header className={styles.home}>
        <Logo />
        <img src={imageSrc} className={styles.image} alt="PlaceholderImage" />
      </header>
    );
  } else if (type === 'backwithimage') {
    return (
      <header className={styles.imageBack}>
        <ChevronLeft className={styles.chevronLeft} onClick={onClick} />{' '}
        <img src={imageSrc} className={styles.image} alt="PlaceholderImage" />
      </header>
    );
  } else if (type === 'detail') {
    return (
      <header className={styles.details}>
        <ChevronLeft className={styles.chevronLeft} onClick={onClick} />
        <Typography size="l">{title}</Typography>
      </header>
    );
  } else if (type === 'breadcrumbs') {
    return (
      <header className={styles.breadCrumbs}>
        <ChevronLeft className={styles.chevronLeft} onClick={onClick} />
        <Typography size="s">{title}</Typography>
      </header>
    );
  } else {
    return (
      <header className={styles.back}>
        <ChevronLeft className={styles.chevronLeft} onClick={onClick} />
      </header>
    );
  }
};
export default Header;
