import React from 'react';
import ActionButton from './Actionbutton';
import Actionbutton from './Actionbutton';

export default {
  title: 'Component/Actionbutton',
  component: Actionbutton,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const Primary = (): JSX.Element => (
  <ActionButton type="button" style="primary">
    Login
  </ActionButton>
);
export const Secondary = (): JSX.Element => (
  <ActionButton type="button" style="secondary">
    Register
  </ActionButton>
);
