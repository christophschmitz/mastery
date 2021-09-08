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
  const styleClass = (): string => {
    switch (style) {
      case 'primary':
        return styles.primary;
      case 'secondary':
        return styles.secondary;
    }
  };

  return (
    <button
      onClick={onClick}
      type={type}
      className={`${styles.button} ${styleClass()}`}
    >
      {children}
    </button>
  );
};

export default ActionButton;
