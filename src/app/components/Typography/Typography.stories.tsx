import React from 'react';
import Typography from './Typography';

export default {
  title: 'Component/Typography',
  component: Typography,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const All = (): JSX.Element => (
  <>
    <Typography size="l">Big Heading</Typography>
    <Typography size="m">Small Heading</Typography>
    <Typography size="ms">Small Heading</Typography>
    <Typography size="s">Really Small Heading</Typography>
    <Typography size="p">This a paragraph</Typography>
    <Typography size="ps">This a paragraph</Typography>
    <Typography size="xl">This a Name</Typography>
    <Typography size="pp">This a paragraph</Typography>
  </>
);
