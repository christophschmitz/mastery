import React from 'react';
import styles from './Slider.module.css';
import Typography from '../Typography/Typography';

export type SliderProps = {
  size: 'minutes' | 'hours';
  value: string;
  id?: string;
  min: string;
  max: string;
};

const Rangeslider = ({
  value,
  id,
  min,
  max,
  size,
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
      />
    </div>
  );
};
export default Rangeslider;
