import React from 'react';
import styles from './Typography.module.css';

type TypographyProps = {
  size: 's' | 'm' | 'l';
  children: React.ReactNode;
};

const styleMap = {
  s: styles.smallHeadline,
  m: styles.mediumHeadline,
  l: styles.largeHeadline,
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
  }
}