import React from 'react';
import {Box, Grid, GridItem, useColorModeValue} from '@chakra-ui/react';
import {Input} from './Input';
import {Preview} from './Preview';
import {Output} from './Output';
import PropTypes from 'prop-types';

export default function Content(props) {
    const showThings = props.message.length;
    return (
        <Box bg={useColorModeValue('gray.50', 'inherit')} pt={2}>
            <Box>
                <Grid templateColumns="repeat(8, 1fr)" gap={3}>
                    <GridItem colStart={2} colEnd={8}>
                        <Input message={props.message} onMessageChange={props.onMessageChange}
                               chatClient={props.chatClient} onClientClick={props.onClientClick}/>
                    </GridItem>
                </Grid>
            </Box>

            {showThings ? <Box pt={4}>
                <Box mt={[10, 0]}>
                    <Grid templateColumns="repeat(8, 1fr)" gap={3}>
                        <GridItem colStart={2} colEnd={8}>
                            <Preview message={props.message} chatClient={props.chatClient}/>
                        </GridItem>
                    </Grid>
                </Box>
            </Box> : null}

            {showThings ? <Box pt={4}>
                <Box mt={[10, 0]}>
                    <Grid templateColumns="repeat(8, 1fr)" gap={3}>
                        <GridItem colStart={2} colEnd={8}>
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