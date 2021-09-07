import React from 'react';
import styles from './Typography.module.css';

type TypographyProps = {
  size: 's' | 'm' | 'l' | 'xl';
  children: React.ReactNode;
};

export default function Typography({
  size,
  children,
}: TypographyProps): JSX.Element {
  if (size === 's') {
    return <h3 className={styles.smallHeadline}>{children}</h3>;
  } else if (size === 'm') {
    return <h2 className={styles.mediumHeadline}>{children}</h2>;
  } else {
    return <h1 className={styles.largeHeadline}>{children}</h1>;
  }
}
