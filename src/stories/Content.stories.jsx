import React from 'react';
import Content from './Content';
import * as InputStories from './Input.stories';


const ContentStories = {
  title: 'Layout/Content',
  component: Content,
  argTypes: {},
};

const Template = (args) => <Content {...args} />;

export const Empty = Template.bind({});
Empty.args = {
  ...InputStories.Empty.args
};
export const Filled = Template.bind({});
Filled.args = {
  ...InputStories.Filled.args
};

export default ContentStories;