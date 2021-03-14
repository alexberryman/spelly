import React from 'react';
import {Box, GridItem, Heading, SimpleGrid, Text, useColorModeValue} from '@chakra-ui/react';
import {Input} from './Input';
import {Preview} from './Preview';
import {Output} from './Output';
import PropTypes from 'prop-types';
import Separator from './Separator';

export default function Content(props) {
    const showThings = props.message.length;
    return (
        <Box bg={useColorModeValue('gray.50', 'inherit')} p={10}>
            <Box>
                <SimpleGrid display={{base: 'initial', md: 'grid'}} columns={{md: 3}} spacing={{md: 6}}>
                    <GridItem colSpan={{md: 1}}>
                        <Box px={[4, 0]}>
                            <Heading fontSize="lg" fontWeight="md" lineHeight="6">
                                Input
                            </Heading>
                            <Text mt={1} fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')}>
                                Enter the text you want to be converted to emojis!
                            </Text>
                        </Box>
                    </GridItem>
                    <GridItem mt={[5, null, 0]} colSpan={{md: 2}}>
                        <Input message={props.message} onMessageChange={props.onMessageChange} chatClient={props.chatClient} onClientClick={props.onClientClick}/>
                    </GridItem>
                </SimpleGrid>
            </Box>

            <Separator/>
            <Box mt={[10, 0]}>
                <SimpleGrid display={{base: 'initial', md: 'grid'}} columns={{md: 3}} spacing={{md: 6}}>
                    <GridItem colSpan={{md: 1}}>
                        <Box px={[4, 0]}>
                            <Heading fontSize="lg" fontWeight="medium" lineHeight="6">
                                Preview
                            </Heading>
                            <Text mt={1} fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')}>
                                See a preview of what the emojis will look like in your chat client
                            </Text>
                        </Box>
                    </GridItem>
                    <GridItem mt={[5, null, 0]} colSpan={{md: 2}}>
                        {showThings ? <Preview message={props.message} chatClient={props.chatClient}/> : null}
                    </GridItem>
                </SimpleGrid>
            </Box>

            <Separator/>

            <Box mt={[10, 0]}>
                <SimpleGrid display={{base: 'initial', md: 'grid'}} columns={{md: 3}} spacing={{md: 6}}>
                    <GridItem colSpan={{md: 1}}>
                        <Box px={[4, 0]}>
                            <Heading fontSize="lg" fontWeight="medium" lineHeight="6">
                                Output
                            </Heading>
                            <Text mt={1} fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')}>
                                Copy and Paste this code into your chat client.
                            </Text>
                        </Box>
                    </GridItem>
                    <GridItem mt={[5, null, 0]} colSpan={{md: 2}}>
                        {showThings ? <Output message={props.message} chatClient={props.chatClient}/> : null}
                    </GridItem>
                </SimpleGrid>
            </Box>
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