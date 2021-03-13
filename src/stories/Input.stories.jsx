import React from 'react';

import { Input } from './Input';

const InputStories = {
  title: 'Component/Input',
  component: Input,
  argTypes: {},
};

const Template = (args) => <Input {...args} />;

export const Empty = Template.bind({});
Empty.args = {
  message: ''
};

export const Filled = Template.bind({});
Filled.args = {
  message: 'Second Commit'
};

export default InputStories;
