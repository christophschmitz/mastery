import React from 'react';
import styles from './ExplorationCardGroup.module.css';
import ExplorationCard from '../ExplorationCard/ExplorationCard';

type Card = {
  title: string;
  description: string;
  onClick: () => void;
};

export type ExplorationCardProps = {
  explorationList: Card[];
  className?: string;
};

const ExplorationCardGroup = ({
  explorationList,
  className,
}: ExplorationCardProps): JSX.Element => {
  return (
    <section className={`${styles.container} ${className}`}>
      {explorationList.map((card, title) => (
        <ExplorationCard
          key={title}
          title={card.title}
          description={card.description}
          onClick={card.onClick}
        />
      ))}
    </section>
  );
};
export default ExplorationCardGroup;
