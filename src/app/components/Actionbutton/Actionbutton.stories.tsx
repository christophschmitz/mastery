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

// export const All = (): JSX.Element => (
//   <>
//     <Actionbutton type="button" style="primary">
//       Big Heading
//     </Actionbutton>
//     <Actionbutton type="button" style="secondary">
//       Small Heading
//     </Actionbutton>
//   </>
// );
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
