import React from 'react';
import {Box, chakra, Flex, IconButton, Link, useColorMode, useColorModeValue} from '@chakra-ui/react';
import {FaMoon, FaSun} from 'react-icons/fa';
import sLogo from './assets/slack/s.png';
import pLogo from './assets/slack/p.png';
import eLogo from './assets/slack/e.png';
import lLogo from './assets/slack/l.png';
import yLogo from './assets/slack/y.png';

export const Header = ({...props}) => {
    const bg = useColorModeValue('gray.50', 'gray.900');
    const SwitchIcon = useColorModeValue(FaMoon, FaSun);
    const {toggleColorMode: toggleMode} = useColorMode();
    const text = useColorModeValue('dark', 'light');
    return (
        <React.Fragment>
            <chakra.header h='full' bg={bg} w="full" px={{base: 2, sm: 4}} py={4}>
                <Flex alignItems="center" justifyContent="space-between" mx="auto">
                    <Link display="flex" alignItems="center" href="/">
                        <img src={sLogo} alt='spelly logo' width='52px' height='52px'/>
                        <img src={pLogo} alt='spelly logo' width='52px' height='52px'/>
                        <img src={eLogo} alt='spelly logo' width='52px' height='52px'/>
                        <img src={lLogo} alt='spelly logo' width='52px' height='52px'/>
                        <img src={lLogo} alt='spelly logo' width='52px' height='52px'/>
                        <img src={yLogo} alt='spelly logo' width='52px' height='52px'/>
                    </Link>
                    <Box>
                        <IconButton size="md" fontSize="lg" aria-label={`Switch to ${text} mode`} variant="ghost"
                                    color="current" ml={{base: '0', md: '3'}} onClick={toggleMode}
                                    icon={<SwitchIcon/>}/>
                    </Box>
                </Flex>
            </chakra.header>
        </React.Fragment>
    );
};

Header.propTypes = {};

Header.defaultProps = {};