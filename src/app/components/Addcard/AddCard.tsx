import React from 'react';
import styles from './AddCard.module.css';
import Typography from '../Typography/Typography';
import PlusIcon from '../assets/PlusIcon';

export type CardProps = {
  imageSrc: string;
  title: string;
  description: string;
  onClick?: () => void;
};

const Card = ({
  imageSrc,
  title,
  description,
  onClick,
}: CardProps): JSX.Element => {
  return (
    <article className={styles.card}>
      <img src={imageSrc} alt="placeholder image" className={styles.imgage} />
      <div className={styles.content}>
        <Typography size="m">{title}</Typography>
        <Typography size="p">{description}</Typography>
      </div>
      <button onClick={onClick} className={styles.addButton}>
        <PlusIcon className={styles.plusIcon} />
      </button>
    </article>
  );
};

export default Card;
