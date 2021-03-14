import React from 'react';
import {Box, GridItem, Heading, SimpleGrid, Text, useColorModeValue, Grid} from '@chakra-ui/react';
import {Input} from './Input';
import {Preview} from './Preview';
import {Output} from './Output';
import PropTypes from 'prop-types';
import Separator from './Separator';

export default function Content(props) {
    const showThings = props.message.length;
    let color = useColorModeValue('gray.600', 'gray.400');
    return (
        <Box bg={useColorModeValue('gray.50', 'inherit')} p={10}>
            <Box centerContent>
                <Grid templateColumns="repeat(8, 1fr)" gap={3}>
                    <GridItem colStart={2} colEnd={8} >
                        <Input message={props.message} onMessageChange={props.onMessageChange}
                               chatClient={props.chatClient} onClientClick={props.onClientClick}/>
                    </GridItem>
                </Grid>
            </Box>

            {showThings ? <Box><Separator/>
                <Box mt={[10, 0]} centerContent>
                    <Grid templateColumns="repeat(8, 1fr)" gap={3}>
                        <GridItem colStart={2} colEnd={8} >
                            <Preview message={props.message} chatClient={props.chatClient}/>
                        </GridItem>
                    </Grid>
                </Box>
            </Box> : null}

            {showThings ? <Box><Separator/>
                <Box mt={[10, 0]} centerContent>
                    <Grid templateColumns="repeat(8, 1fr)" gap={3}>
                        <GridItem colStart={2} colEnd={8} >
                            <Output message={props.message} chatClient={props.chatClient}/>
                        </GridItem>
                    </Grid>
                </Box>
            </Box> : null}
        </Box>
    );
}

Content.propTypes = {
    message: PropTypes.string.isRequired,
    onMessageChange: PropTypes.func,
    onClientClick: PropTypes.func,
};

Content.defaultProps = {
    message: '',
    onMessageChange: undefined,
    onClientClick: undefined,
};