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

const addOnClickFunction = () => console.log('added');

const cards = [
  {
    title: 'Crafting',
    description: 'Exampledescription',
    onClick: addOnClickFunction,
  },
  {
    title: 'Knitting',
    description: 'Exampledescription',
    onClick: addOnClickFunction,
  },
  {
    title: 'Art',
    description: 'Exampledescription',
    onClick: addOnClickFunction,
  },
];

const Template: Story<ExplorationCardProps> = (args) => (
  <ExplorationCardGroup {...args} />
);

export const Explorationgroup = Template.bind({});
Explorationgroup.args = {
  explorationList: cards,
};
