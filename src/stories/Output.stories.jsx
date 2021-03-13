import React from 'react';
import { Output } from './Output';
import * as InputStories from './Input.stories';

const OutputStories = {
  title: 'Component/Output',
  component: Output,
  argTypes: {},
};

const Template = (args) => <Output {...args} />;

export const Empty = Template.bind({});
Empty.args = {
...InputStories.Empty.args
};

export const Filled = Template.bind({});
Filled.args = {
...InputStories.Filled.args
};

export default OutputStories;
