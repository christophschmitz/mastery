import React from 'react';
import ExplorationCardGroup from './ExplorationCardGroup';
import type { Story } from '@storybook/react';
import type { ExplorationCardProps } from './ExplorationCardGroup';

export default {
  title: 'Component/Card',
  component: ExplorationCardGroup,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

const onAddClick = () => console.log('added');

const cards = [
  {
    title: 'Crafting',
    description: 'Exampledescription',
    onClick: onAddClick,
  },
  {
    title: 'Knitting',
    description: 'Exampledescription',
    onClick: onAddClick,
  },
  {
    title: 'Art',
    description: 'Exampledescription',
    onClick: onAddClick,
  },
];

const Template: Story<ExplorationCardProps> = (args) => (
  <ExplorationCardGroup {...args} />
);

export const Explorationgroup = Template.bind({});
Explorationgroup.args = {
  explorationList: cards,
};
