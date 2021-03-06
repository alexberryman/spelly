import React from 'react';
import Preview from './Preview';
import * as Textarea from './Textarea.stories';

export default {
    title: 'Component/Preview',
    component: Preview,
};

const Template = (args) => <Preview {...args} />;

export const Empty = Template.bind({});
Empty.args = {
    ...Textarea.Empty.args,
};

export const Filled = Template.bind({});
Filled.args = {
    ...Textarea.Filled.args,
};
