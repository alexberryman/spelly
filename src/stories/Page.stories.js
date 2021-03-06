import React from 'react';

import { Page } from './Page';
import * as TextareaStories from './Textarea.stories';

export default {
  title: 'Example/Page',
  component: Page,
};

const Template = (args) => <Page {...args} />;

export const Empty = Template.bind({});
Empty.args = {
  ...TextareaStories.Empty.args,
};

export const Filled = Template.bind({});
Filled.args = {
  ...TextareaStories.Filled.args,
};
