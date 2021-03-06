import React from 'react';
import PropTypes from 'prop-types';
import {Box, Button, Stack, useClipboard, useColorModeValue} from '@chakra-ui/react';
import {CopyIcon} from '@chakra-ui/icons';
import {getEmojiCodeSnippet as slackGetEmojiCodeSnippet} from './Slack';
import {getEmojiCodeSnippet as discordGetEmojiCodeSnippet} from './Discord';


export const Output = ({message, chatClient, ...props}) => {
    let emojiCodeSnippet = [];
    switch (chatClient){
        case 'slack':
            emojiCodeSnippet = slackGetEmojiCodeSnippet(message);
            break;
        case 'discord':
            emojiCodeSnippet = discordGetEmojiCodeSnippet(message);
            break;
        default:
            emojiCodeSnippet = slackGetEmojiCodeSnippet(message);
            break;
    }

    const {onCopy} = useClipboard(emojiCodeSnippet.join(''));

    return (
        <Box shadow="base" rounded={[null, 'md']} overflow={{sm: 'hidden'}}>
            <Stack px={4} py={5} bg={useColorModeValue('white', 'gray.700')} spacing={6} p={{sm: 6}}>
                <p color={useColorModeValue('gray.50', 'gray.900')}>{emojiCodeSnippet}</p>
            </Stack>
            <Box px={{base: 4, sm: 6}} py={3} bg={useColorModeValue('gray.50', 'gray.900')} textAlign="right">
                <Button bg='purple' color='white' _hover={{bg: 'green', shadow: ''}} fontWeight="md" onClick={onCopy}
                        leftIcon={<CopyIcon/>}>
                    Copy
                </Button>
            </Box>
        </Box>
    );
};

Output.propTypes = {
    message: PropTypes.string.isRequired,
    chatClient: PropTypes.string.isRequired,
    onCopy: PropTypes.func,
};

Output.defaultProps = {
    message: '',
    chatClient: '',
    onCopy: undefined,
};