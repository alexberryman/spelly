import React from 'react';
import PropTypes from 'prop-types';
import {Box, Stack, useColorModeValue} from '@chakra-ui/react';
import {getEmoji as slackGetEmoji} from './Slack';
import {getEmoji as discordGetEmoji} from './Discord';

export const Preview = ({message, chatClient, ...props}) => {
    let emojiPreview = [];
    switch (chatClient){
        case 'slack':
            emojiPreview = slackGetEmoji(message);
            break;
        case 'discord':
            emojiPreview = discordGetEmoji(message);
            break;
        default:
            emojiPreview = slackGetEmoji(message);
            break;
    }
    return (
        <Box shadow="base" rounded={[null, 'md']} overflow={{sm: 'hidden'}}>
            <Stack px={4} py={5} bg={useColorModeValue('white', 'gray.700')} spacing={6} p={{sm: 6}}>
                <Stack direction='horizontal'>{emojiPreview}</Stack>
            </Stack>
        </Box>
    );
};

Preview.propTypes = {
    message: PropTypes.string.isRequired,
    chatClient: PropTypes.string.isRequired,
};

Preview.defaultProps = {
    message: '',
    chatClient: ''
};