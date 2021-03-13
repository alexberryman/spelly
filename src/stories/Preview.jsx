import React from 'react';
import PropTypes from 'prop-types';
import {Box, Stack, useColorModeValue} from '@chakra-ui/react';
import {getEmoji} from './Slack';

export const Preview = ({message, ...props}) => {
    return (
        <Box shadow="base" rounded={[null, 'md']} overflow={{sm: 'hidden'}}>
            <Stack px={4} py={5} bg={useColorModeValue('white', 'gray.700')} spacing={6} p={{sm: 6}}>
                <Stack direction='horizontal'>{getEmoji(message)}</Stack>
            </Stack>
        </Box>
    );
};

Preview.propTypes = {
    message: PropTypes.string.isRequired,
};

Preview.defaultProps = {
    message: '',
};