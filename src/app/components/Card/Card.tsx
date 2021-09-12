import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Card.module.css';
import Typography from '../Typography/Typography';
import ChevronRight from '../assets/ChevronRight';

export type CardProps = {
  imageSrc: string;
  title: string;
  description: string;
};

const Card = ({ imageSrc, title, description }: CardProps): JSX.Element => {
  return (
    <article className={styles.card}>
      <img src={imageSrc} alt="placeholder image" className={styles.imgage} />
      <div className={styles.content}>
        <Typography size="m">{title}</Typography>
        <Typography size="p">{description}</Typography>
      </div>
      <div className={styles.chevron}>
        <Link to={`/details${title}`}>
          <ChevronRight className={styles.chevronLink} />
        </Link>
      </div>
    </article>
  );
};

export default Card;
