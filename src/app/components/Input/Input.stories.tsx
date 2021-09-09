import React from 'react';
import Input from './Input';
import type { InputProps } from './Input';
import type { Story } from '@storybook/react';

export default {
  title: 'Component/Input',
  component: Input,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};
const onChangeFunction = () => {
  console.log('Hello World');
};

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const email = Template.bind({});
email.args = {
  label: 'Your Email',
  id: '',
  value: '',
  type: 'email',
  placeholder: 'Enter your email here...',
  onChange: onChangeFunction,
};

export const password = Template.bind({});
password.args = {
  label: 'Your Password',
  id: '',
  value: '',
  type: 'password',
  placeholder: 'Enter your password...',
  onChange: onChangeFunction,
};
