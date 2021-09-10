import React from 'react';
import Card from './Card';

export default {
  title: 'Component/Card',
  component: Card,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const defaultCard = (): JSX.Element => (
  <Card
    image="https://images.unsplash.com/photo-1536329583941-14287ec6fc4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    title="Handlettering"
    description="500 hrs left"
  />
);
