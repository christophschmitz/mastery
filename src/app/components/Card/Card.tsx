import React from 'react';
import styles from './Card.module.css';
import Typography from '../Typography/Typography';
import ChevronRight from '../assets/ChevronRight';
import PlusIcon from '../assets/PlusIcon';
import { Link } from 'react-router-dom';

export type CardProps = {
  type: 'default' | 'add';
  imageSrc: string;
  title: string;
  description?: string;
  onClick?: () => void;
  id: string | number | undefined;
  progress: string | number;
};

const Card = ({
  type,
  imageSrc,
  title,
  description,
  progress,
  onClick,
}: CardProps): JSX.Element => {
  return (
    <li>
      <article className={styles.card}>
        <img src={imageSrc} alt="placeholder image" className={styles.imgage} />
        {type === 'default' ? (
          <div className={styles.content}>
            <Typography size="m">{title}</Typography>
            <Typography size="p">{`${progress} hrs left`}</Typography>
          </div>
        ) : (
          <div className={styles.content}>
            <Typography size="m">{title}</Typography>
            <Typography size="p">{description}</Typography>
          </div>
        )}

        {type === 'default' ? (
          <div className={styles.chevron}>
            <Link to={`/detail/${title}`}>
              <ChevronRight className={styles.chevronLink} />
            </Link>
          </div>
        ) : (
          <button onClick={onClick} className={styles.addButton}>
            <PlusIcon />
          </button>
        )}
      </article>
    </li>
  );
};

export default Card;
