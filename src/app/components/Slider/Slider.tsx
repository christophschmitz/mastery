import React from 'react';
import styles from './Slider.module.css';
import Typography from '../Typography/Typography';

export type SliderProps = {
  size: 'minutes' | 'hours';
  value: string;
  id?: string;
  min: string;
  max: string;
  onChange: (value: string) => void;
};

const Rangeslider = ({
  value,
  id,
  min,
  max,
  size,
  onChange,
}: SliderProps): JSX.Element => {
  return (
    <div>
      {size === 'minutes' ? (
        <span>
          <Typography size="m">{value} mins</Typography>
        </span>
      ) : (
        <span>
          <Typography size="m">{value} hrs</Typography>
        </span>
      )}

      <input
        type="range"
        min={min}
        max={max}
        className={styles.slider}
        value={value}
        id={id}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
};
export default Rangeslider;
