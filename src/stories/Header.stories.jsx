import React from 'react';

import { Header } from './Header';

const HeaderStories = {
  title: 'Component/Header',
  component: Header,
  argTypes: {},
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {

};

export default HeaderStories;
