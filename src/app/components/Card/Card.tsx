import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Card.module.css';
import Typography from '../Typography/Typography';
import ChevronRight from '../assets/ChevronRight';

export type CardProps = {
  image: string;
  title: string;
  discription: string;
};

const Card = ({ image, title, discription }: CardProps): JSX.Element => {
  return (
    <div className={styles.card}>
      <img src={image} alt="placeholder image" className={styles.imgage} />
      <div className={styles.content}>
        <Typography size="m">{title}</Typography>
        <Typography size="p">{discription}</Typography>
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
