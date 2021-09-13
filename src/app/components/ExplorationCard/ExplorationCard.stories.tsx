import React from 'react';
import ExplorationCard from './ExplorationCard';

export default {
  title: 'Component/Card',
  component: ExplorationCard,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};
const onClickAdd = () => console.log('Added');

export const Explorationcard = (): JSX.Element => (
  <ExplorationCard
    title="Knit"
    description="500 hrs for mastery"
    onClick={onClickAdd}
  ></ExplorationCard>
);
