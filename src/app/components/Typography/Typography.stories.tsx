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
    <Typography size="s">Really Small Heading</Typography>
  </>
);
