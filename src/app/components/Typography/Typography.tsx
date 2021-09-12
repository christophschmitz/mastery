import React from 'react';
import styles from './Typography.module.css';

export type TypographyProps = {
  size: 's' | 'm' | 'l' | 'p';
  children: React.ReactNode;
};

const styleMap = {
  s: styles.smallHeadline,
  m: styles.mediumHeadline,
  l: styles.largeHeadline,
  p: styles.paragraph,
};

export default function Typography({
  size,
  children,
}: TypographyProps): JSX.Element {
  switch (size) {
    case 's':
      return <h3 className={styleMap[size]}>{children}</h3>;
    case 'm':
      return <h2 className={styleMap[size]}>{children}</h2>;
    case 'l':
      return <h1 className={styleMap[size]}>{children}</h1>;
    case 'p':
      return <p className={styleMap[size]}>{children}</p>;
  }
}
