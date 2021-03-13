import React from 'react';

import { ChakraSplash } from './ChakraSplash';

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  title: 'Example/ChakraSplash',
  component: ChakraSplash,
  argTypes: {},
};

const Template = (args) => <ChakraSplash {...args} />;

export const LearnWithStorybook = Template.bind({});
LearnWithStorybook.args = {
  label: 'Learn Chakra with Storybook'
};

export const Learn = Template.bind({});
Learn.args = {
  label: 'Learn Chakra'
};

