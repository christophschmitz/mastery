import React from 'react';

type TypographyProps = {
  size: 's' | 'm' | 'l' | 'xl';
  children: React.ReactNode;
};

export default function Typography({
  size,
  children,
}: TypographyProps): JSX.Element {
  if (size === 's') {
    return <h3>{children}</h3>;
  } else if (size === 'm') {
    return <h2>{children}</h2>;
  } else {
    return <h1>{children}</h1>;
  }
}
