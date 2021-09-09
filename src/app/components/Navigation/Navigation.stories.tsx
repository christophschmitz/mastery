import React from 'react';
import Navigation from './Navigation';

export default {
  title: 'Component/Navigation',
  component: Navigation,
};

export const Home = (): JSX.Element => <Navigation activeLink="home" />;
export const Add = (): JSX.Element => <Navigation activeLink="add" />;
export const User = (): JSX.Element => <Navigation activeLink="user" />;
