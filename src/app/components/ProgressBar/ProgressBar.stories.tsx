import React from 'react';
import ProgressBar from './ProgressBar';

export default {
  title: 'Component/Progressbar',
  component: ProgressBar,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const progressbar = (): JSX.Element => (
  <ProgressBar
    percentageVal={234}
    textVal="234"
    minValue={1}
    maxValue={500}
    children="If there is no struggle, there is no progress."
  />
);
