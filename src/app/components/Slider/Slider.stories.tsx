import React from 'react';
import Slider from './Slider';

export default {
  title: 'Component/Slider',
  component: Slider,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};
const onChangeFunction = (value: string) => {
  console.log(value);
};

export const minuteSlider = (): JSX.Element => (
  <Slider
    size="minutes"
    value="45"
    min="1"
    max="60"
    onChange={onChangeFunction}
  />
);

export const hourSlider = (): JSX.Element => (
  <Slider size="hours" value="2" min="1" max="24" onChange={onChangeFunction} />
);
