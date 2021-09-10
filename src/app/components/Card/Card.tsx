import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Card.module.css';
import Typography from '../Typography/Typography';
import ChevronRight from '../assets/ChevronRight';

export type CardProps = {
  image: string;
  title: string;
  description: string;
};

const Card = ({ image, title, description }: CardProps): JSX.Element => {
  return (
    <div className={styles.card}>
      <img src={image} alt="placeholder image" className={styles.imgage} />
      <div className={styles.content}>
        <Typography size="m">{title}</Typography>
        <Typography size="p">{description}</Typography>
      </div>
      <div className={styles.chevron}>
        <Link to={`/details${title}`}>
          <ChevronRight className={styles.chevronLink} />
        </Link>
      </div>
    </div>
  );
};

export default Card;
