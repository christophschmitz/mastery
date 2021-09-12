import React from 'react';
import styles from './Tag.module.css';

type TagProps = {
  active?: boolean;
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
};

const Tag = ({
  active,
  onClick,
  children,
  className,
}: TagProps): JSX.Element => {
  return (
    <button
      onClick={onClick}
      className={`${styles.tag} ${active && styles.active}`}
    >
      {children}
    </button>
  );
};
export default Tag;
