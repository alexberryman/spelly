import React from 'react';
import PropTypes from 'prop-types';
import {Box, Button, Stack, useClipboard, useColorModeValue} from '@chakra-ui/react';
import {CopyIcon} from '@chakra-ui/icons';
import p from './assets/alphabet-white/p.png';
import {getEmojiCodeSnippet} from './Slack';


export const Output = ({message, ...props}) => {
    let emojiCodeSnippet = getEmojiCodeSnippet(message);
    const {onCopy} = useClipboard(emojiCodeSnippet);

    return (
        <Box shadow="base" rounded={[null, 'md']} overflow={{sm: 'hidden'}}>
            <Stack px={4} py={5} bg={useColorModeValue('white', 'gray.700')} spacing={6} p={{sm: 6}}>
                <p color={useColorModeValue('gray.50', 'gray.900')}>{emojiCodeSnippet}</p>
            </Stack>
            <Box px={{base: 4, sm: 6}} py={3} bg={useColorModeValue('gray.50', 'gray.900')} textAlign="right">
                <Button bg='purple' color='white' _hover={{bg: 'green', shadow: ''}} fontWeight="md" onClick={onCopy}>
                    <Stack direction='horizontal'>
                    <CopyIcon/>
                    <Box>
                        Copy
                    </Box>
                    </Stack>
                </Button>
            </Box>
        </Box>
    );
};

Output.propTypes = {
    message: PropTypes.string.isRequired,
    onCopy: PropTypes.func,
};

Output.defaultProps = {
    message: '',
    onCopy: undefined,
};