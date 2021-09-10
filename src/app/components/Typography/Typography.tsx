import React from 'react';
import styles from './Typography.module.css';

type TypographyProps = {
  size: 'xs' | 's' | 'm' | 'mi' | 'l';
  children: React.ReactNode;
};

const styleMap = {
  xs: styles.smallLabel,
  s: styles.smallHeadline,
  m: styles.mediumHeadline,
  mi: styles.placeholder,
  l: styles.largeHeadline,
};

export default function Typography({
  size,
  children,
}: TypographyProps): JSX.Element {
  switch (size) {
    case 'xs':
      return <label className={styleMap[size]}>{children}</label>;
    case 's':
      return <h3 className={styleMap[size]}>{children}</h3>;
    case 'm':
      return <h2 className={styleMap[size]}>{children}</h2>;
    case 'mi':
      return <p className={styleMap[size]}>{children}</p>;
    case 'l':
      return <h1 className={styleMap[size]}>{children}</h1>;
  }
}
