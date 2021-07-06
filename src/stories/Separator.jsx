import React from 'react';
import {Box, useColorModeValue, Grid, GridItem} from '@chakra-ui/react';

const Separator = props => {
    return <Box visibility={{base: 'hidden', sm: 'visible'}} aria-hidden="true">
        <Grid templateColumns="repeat(8, 1fr)" gap={3}>
            <GridItem colStart={2} colEnd={8} >
            <Box py={5}>
            <Box borderTop="solid 1px" borderTopColor={useColorModeValue('gray.200', 'whiteAlpha.200')}/>
        </Box></GridItem></Grid>
    </Box>;
};

export default Separator;