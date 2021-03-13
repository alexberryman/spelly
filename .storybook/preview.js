import React from 'react';
import {addDecorator} from '@storybook/react';
import {ChakraProvider, theme} from '@chakra-ui/react';

addDecorator((storyFn) => (
    <ChakraProvider resetCSS theme={theme}>
        {storyFn()}
    </ChakraProvider>
));

export const parameters = {
    actions: {argTypesRegex: '^on[A-Z].*'},
};