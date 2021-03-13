import React from 'react';
import { Page } from './Page';
import * as InputStories from './Input.stories'

const PageStories = {
  title: 'Layout/Page',
  component: Page,
  argTypes: {},
};

const Template = (args) => <Page {...args} />;

export const Empty = Template.bind({});
Empty.args = {
  ...InputStories.Empty.args
};

export const Filled = Template.bind({});
Filled.args = {
  ...InputStories.Filled.args
};

export default PageStories;
