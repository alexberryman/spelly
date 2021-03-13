import React from 'react';
import {ChakraProvider, theme} from '@chakra-ui/react';
import {Page} from './stories/Page';

function App() {
    return (
        <ChakraProvider theme={theme}>
            <Page/>
        </ChakraProvider>
    );
}

export default App;
