import React from 'react';
import styles from './Typography.module.css';

export type TypographyProps = {
  size: 's' | 'm' | 'ms' | 'l' | 'p' | 'ps' | 'xl' | 'pp';
  children: React.ReactNode;
  className?: string;
};

const styleMap = {
  s: styles.smallHeadline,
  m: styles.mediumHeadline,
  ms: styles.mediumHeadlineSecondary,
  l: styles.largeHeadline,
  xl: styles.xLargeHeadline,
  p: styles.paragraph,
  ps: styles.paragraphSecondary,
  pp: styles.paragraphPrimary,
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
    case 'ms':
      return <h2 className={styleMap[size]}>{children}</h2>;
    case 'l':
      return <h1 className={styleMap[size]}>{children}</h1>;
    case 'p':
      return <p className={styleMap[size]}>{children}</p>;
    case 'ps':
      return <p className={styleMap[size]}>{children}</p>;
    case 'xl':
      return <h1 className={styleMap[size]}>{children}</h1>;
    case 'pp':
      return <p className={styleMap[size]}>{children}</p>;
  }
}
