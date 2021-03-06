import React from 'react';
import EmojiCodeSnippet from './EmojiCodeSnippet';
import * as Textarea from './Textarea.stories';

export default {
    title: 'Example/EmojiCodeSnippet',
    component: EmojiCodeSnippet,
};

const Template = (args) => <EmojiCodeSnippet {...args} />;

export const Empty = Template.bind({});
Empty.args = {
    ...Textarea.Empty.args,
};

export const Filled = Template.bind({});
Filled.args = {
    ...Textarea.Filled.args,
};
