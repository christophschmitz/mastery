import React from 'react';
import styles from './ExplorationCard.module.css';
import Typography from '../Typography/Typography';
import AddIcon from '../assets/AddIcon';

export type ExplorationCardProps = {
  title: string;
  description: string;
  onClick: () => void;
};

const ExplorationCard = ({
  title,
  description,
  onClick,
}: ExplorationCardProps): JSX.Element => {
  return (
    <article className={styles.card}>
      <div>
        <Typography size="ms">{title}</Typography>
        <Typography size="ps">{description}</Typography>
      </div>
      <button className={styles.addButton} onClick={onClick}>
        <AddIcon />
      </button>
    </article>
  );
};

export default ExplorationCard;
