import React from 'react';
import styles from './Input.module.css';

export type InputProps = {
  label: string;
  id: string;
  value: string;
  type: 'email' | 'password';
  placeholder: string;
  onChange: (value: string) => void;
};

const Input = ({
  label,
  id,
  value,
  type,
  placeholder,
  onChange,
}: InputProps): JSX.Element => {
  return (
    <div>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input
        className={styles.input}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
};
export default Input;
