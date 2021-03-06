import React from 'react';
import Textarea from './Textarea';

export default {
    title: 'Example/Textarea',
    component: Textarea,
};

const Template = (args) => <Textarea {...args} />;

export const Empty = Template.bind({});
Empty.args = {
    value: null,
};

export const Filled = Template.bind({});
Filled.args = {
    value: 'Second commit',
};
