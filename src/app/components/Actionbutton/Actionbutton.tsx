import React from 'react';
import styles from './Actionbutton.module.css';

export type ActionButtonProps = {
  children: React.ReactNode;
  type: 'button' | 'submit';
  style: 'primary' | 'secondary';
  onClick?: () => void;
};

const ActionButton = ({
  children,
  type,
  style,
  onClick,
}: ActionButtonProps): JSX.Element => {
  const styleMap = {
    primary: styles.primary,
    secondary: styles.secondary,
  };

  return (
    <button
      onClick={onClick}
      type={type}
      className={`${styles.button} ${styleMap[style]}`}
    >
      {children}
    </button>
  );
};

export default ActionButton;
