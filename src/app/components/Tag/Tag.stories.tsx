import React from 'react';
import Tag from './Tag';

export default {
  title: 'Component/Tag',
  component: Tag,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const active = (): JSX.Element => (
  <Tag active onClick={() => console.log('Active')}>
    Crafting
  </Tag>
);

export const inActive = (): JSX.Element => (
  <Tag onClick={() => console.log('inActive')}>Crafting</Tag>
);
