import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import styles from './ProgressBar.module.css';
import './custom.css';
import Typography from '../Typography/Typography';

export type ProgressProps = {
  percentageVal: number;
  textVal: string;
  minValue: number;
  maxValue: number;
  children: string;
};

const ProgressBar = ({
  percentageVal,
  textVal,
  minValue,
  maxValue,
  children,
}: ProgressProps): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.progressBar}>
        <CircularProgressbar
          value={percentageVal}
          text={`${textVal}hrs`}
          minValue={minValue}
          maxValue={maxValue}
          className="Home__progressbar"
        />
      </div>
      <Typography size="m">{children}</Typography>
    </div>
  );
};
export default ProgressBar;
