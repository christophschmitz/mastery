import React from 'react';
import DetailImage from './DetailImage';

export default {
  title: 'Component/Image',
  component: Image,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const headerImage = (): JSX.Element => (
  <DetailImage imageSrc="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80" />
);
