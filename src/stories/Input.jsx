import React from 'react';
import PropTypes from 'prop-types';
import {
    chakra,
    FormControl,
    FormLabel,
    GridItem,
    Button,
    ButtonGroup,
    SimpleGrid,
    Stack,
    Textarea,
    useColorModeValue,
} from '@chakra-ui/react';
import {FaDiscord, FaSlack} from 'react-icons/fa';

export const Input = ({message, onMessageChange, chatClient, onClientClick, ...props}) => {
    return (
        <chakra.form
            shadow="base"
            rounded={[null, 'md']}
            overflow={{sm: 'hidden'}}
        >
            <Stack
                px={4}
                py={5}
                bg={useColorModeValue('white', 'gray.700')}
                spacing={6}
                p={{sm: 6}}
            >
                <SimpleGrid columns={6} spacing={6}>
                    <FormControl id="input" as={GridItem} colSpan={6}>
                        <Textarea placeholder="Enter your message here to have it converted to emojis"
                                  defaultValue={message} mt={1} rows={3} shadow="sm" focusBorderColor="brand.400"
                                  fontSize={{sm: 'sm'}} onChange={onMessageChange}/>
                    </FormControl>

                    <FormControl as={GridItem} colSpan={[6, 3]}>
                        <FormLabel for="client" fontSize="sm" fontWeight="md"
                                   color={useColorModeValue('gray.700', 'gray.50')}>
                            Chat Client
                        </FormLabel>
                        <ButtonGroup isAttached={true} spacing={0}>
                            <Button id='slack' leftIcon={<FaSlack />} isActive={chatClient === 'slack'} _active={{bg: 'purple', color: 'white'}} onClick={onClientClick}>Slack</Button>
                            <Button id='discord' leftIcon={<FaDiscord />} isActive={chatClient === 'discord'} _active={{bg: 'purple', color: 'white'}} onClick={onClientClick}>Discord</Button>
                        </ButtonGroup>
                    </FormControl>
                </SimpleGrid>
            </Stack>
        </chakra.form>

    );
};

Input.propTypes = {
    message: PropTypes.string.isRequired,
    onMessageChange: PropTypes.func,
    onClientClick: PropTypes.func,
};

Input.defaultProps = {
    message: '',
    onMessageChange: undefined,
    onClientClick: undefined,
};