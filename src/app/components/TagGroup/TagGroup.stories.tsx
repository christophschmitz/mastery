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
const onClickFunction = () => console.log();
const tags = [
  {
    active: true,
    onClick: onClickFunction,
    children: 'Crafting',
  },
  {
    active: false,
    onClick: onClickFunction,
    children: 'Sport',
  },
  {
    active: false,
    onClick: onClickFunction,
    children: 'Mental',
  },
  {
    active: false,
    onClick: onClickFunction,
    children: 'Art',
  },
  {
    active: false,
    onClick: onClickFunction,
    children: 'Design',
  },
  {
    active: false,
    onClick: onClickFunction,
    children: 'Coding',
  },
];

const Template: Story<TagGroupProps> = (args) => <TagGroup {...args} />;

export const Taggroup = Template.bind({});
Taggroup.args = {
  tagList: tags,
};
