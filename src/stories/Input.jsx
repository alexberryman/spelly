import React from 'react';
import PropTypes from 'prop-types';
import {
    Box,
    Button,
    chakra,
    FormControl,
    FormLabel,
    GridItem,
    Select,
    SimpleGrid,
    Stack,
    Textarea,
    useColorModeValue,
} from '@chakra-ui/react';

export const Input = ({message, onChange,...props}) => {
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
                        <FormLabel fontSize="xl" fontWeight="md" lineHeight="6"
                                   color={useColorModeValue('gray.700', 'gray.50')}>
                            Input
                        </FormLabel>
                        <Textarea
                            placeholder="Enter your message here to have it converted to emojis"
                            defaultValue={message}
                            mt={1}
                            rows={3}
                            shadow="sm"
                            focusBorderColor="brand.400"
                            fontSize={{sm: 'sm'}}
                            onChange={onChange}
                        />
                    </FormControl>

                    <FormControl as={GridItem} colSpan={[6, 3]}>
                        <FormLabel
                            for="client"
                            fontSize="sm"
                            fontWeight="md"
                            color={useColorModeValue('gray.700', 'gray.50')}
                        >
                            Chat Client
                        </FormLabel>
                        <Select
                            id="client"
                            name="client"
                            defaultValue='Slack'
                            mt={1}
                            focusBorderColor="brand.400"
                            shadow="sm"
                            size="sm"
                            w="full"
                            rounded="md"
                        >
                            <option>Slack</option>
                        </Select>
                    </FormControl>
                </SimpleGrid>
            </Stack>
        </chakra.form>

    );
};

Input.propTypes = {
    message: PropTypes.string.isRequired,
    onChange: PropTypes.func,
};

Input.defaultProps = {
    message: '',
    onChange: undefined,
};