import React from 'react';
import styles from './ProgressTrack.module.css';
import ClockIcon from '../assets/ClockIcon';
import Typography from '../Typography/Typography';
import BadgeIcon from '../assets/BadgeIcon';

export type ProgressProps = {
  value: string | number;
  rank: string | number;
};

const ProgressTrack = ({ value, rank }: ProgressProps): JSX.Element => {
  return (
    <section className={styles.progressContainer}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <ClockIcon className={styles.icon} />
        </div>
        <Typography size="m">{`${value} hrs left`}</Typography>
      </div>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <BadgeIcon className={styles.icon} />
        </div>
        <Typography size="m">{`Rank ${rank}`}</Typography>
      </div>
    </section>
  );
};

export default ProgressTrack;
