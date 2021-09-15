import React from 'react';
import Header from './Header';

export default {
  title: 'Component/Header',
  component: Header,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};
const onClickBack = () => console.log('Back');

export const homeHeader = (): JSX.Element => (
  <Header
    type="home"
    imageSrc="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
  />
);

export const backWithImage = (): JSX.Element => (
  <Header
    type="backwithimage"
    onClick={onClickBack}
    imageSrc="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
  />
);

export const backHeader = (): JSX.Element => (
  <Header type="justback" onClick={onClickBack} />
);

export const breadCrumbHeader = (): JSX.Element => (
  <Header
    type="breadcrumbs"
    onClick={onClickBack}
    title="Back to previous page"
  />
);

export const detailHeader = (): JSX.Element => (
  <Header
    type="detail"
    onClick={onClickBack}
    title="Javascript"
    imageSrc="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
  />
);
