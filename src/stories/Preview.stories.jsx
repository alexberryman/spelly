import React from 'react';
import { Preview } from './Preview';
import * as InputStories from './Input.stories';

const PreviewStories = {
  title: 'Component/Preview',
  component: Preview,
  argTypes: {},
};

const Template = (args) => <Preview {...args} />;

export const Empty = Template.bind({});
Empty.args = {
  ...InputStories.Empty.args
};

export const Filled = Template.bind({});
Filled.args = {
  ...InputStories.Filled.args
};

export default PreviewStories;
