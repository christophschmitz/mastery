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
  className?: string;
};

const headerMap = {
  home: styles.home,
  backwithimage: styles.imageBack,
  detail: styles.detailsHeader,
  breadcrumbs: styles.breadCrumbs,
  justback: styles.back,
};

export default function Header({
  type,
  title,
  imageSrc,
  onClick,
}: HeaderProps): JSX.Element {
  switch (type) {
    case 'home':
      return (
        <header className={headerMap[type]}>
          <Logo />
          <img src={imageSrc} className={styles.image} alt="PlaceholderImage" />
        </header>
      );
    case 'backwithimage':
      return (
        <header className={headerMap[type]}>
          <ChevronLeft className={styles.chevronLeft} onClick={onClick} />{' '}
          <img src={imageSrc} className={styles.image} alt="PlaceholderImage" />
        </header>
      );
    case 'detail':
      return (
        <header className={headerMap[type]}>
          <div className={styles.title}>
            <ChevronLeft className={styles.chevronLeft} onClick={onClick} />
            <Typography size="l">{title}</Typography>
          </div>
          <div className={styles.imageWrapper}>
            <img
              src={imageSrc}
              className={styles.detailImage}
              alt="PlaceholderImage"
            />
          </div>
        </header>
      );
    case 'breadcrumbs':
      return (
        <header className={headerMap[type]}>
          <ChevronLeft className={styles.chevronLeft} onClick={onClick} />
          <Typography size="s">{title}</Typography>
        </header>
      );

    case 'justback':
      return (
        <header className={styles.back}>
          <ChevronLeft className={styles.chevronLeft} onClick={onClick} />
        </header>
      );
  }
}
