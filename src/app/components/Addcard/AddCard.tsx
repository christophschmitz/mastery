import React from 'react';
import styles from './AddCard.module.css';
import Typography from '../Typography/Typography';
import PlusIcon from '../assets/PlusIcon';

export type AddCardProps = {
  imageSrc: string;
  title: string;
  description: string;
  onClick?: () => void;
};

const AddCard = ({
  imageSrc,
  title,
  description,
  onClick,
}: AddCardProps): JSX.Element => {
  return (
    <article className={styles.card}>
      <img src={imageSrc} alt="placeholder image" className={styles.imgage} />
      <div className={styles.content}>
        <Typography size="m">{title}</Typography>
        <Typography size="p">{description}</Typography>
      </div>
      <button onClick={onClick} className={styles.addButton}>
        <PlusIcon />
      </button>
    </article>
  );
};

export default AddCard;
