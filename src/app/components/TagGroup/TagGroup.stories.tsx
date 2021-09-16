import React from 'react';
import TagGroup from './TagGroup';
import type { Story } from '@storybook/react';
import type { TagGroupProps } from './TagGroup';

export default {
  title: 'Component/Tag',
  component: TagGroup,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};
const onClickFuntion = () => console.log();
const tags = [
  {
    active: true,
    onClick: onClickFuntion,
    children: 'Crafting',
  },
  {
    active: false,
    onClick: onClickFuntion,
    children: 'Sport',
  },
  {
    active: false,
    onClick: onClickFuntion,
    children: 'Mental',
  },
  {
    active: false,
    onClick: onClickFuntion,
    children: 'Art',
  },
  {
    active: false,
    onClick: onClickFuntion,
    children: 'Design',
  },
  {
    active: false,
    onClick: onClickFuntion,
    children: 'Coding',
  },
];

const Template: Story<TagGroupProps> = (args) => <TagGroup {...args} />;

export const Taggroup = Template.bind({});
Taggroup.args = {
  tagList: tags,
};
