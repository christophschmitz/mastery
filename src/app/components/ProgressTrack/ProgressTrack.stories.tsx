import React from 'react';
import ProgressTrack from './ProgressTrack';

export default {
  title: 'Component/ProgressTrack',
  component: ProgressTrack,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const progress = (): JSX.Element => (
  <ProgressTrack value={230} rank={4} />
);
