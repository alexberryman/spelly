import React from 'react';
import PropTypes from 'prop-types';
import {Box, Code, Grid, Link, Text, VStack} from '@chakra-ui/react';
import {ColorModeSwitcher} from '../../ColorModeSwitcher';
import {Logo} from './Logo';

export const ChakraSplash = ({ label, ...props }) => {
  return (
      <Box textAlign="center" fontSize="xl">
          <Grid minH="100vh" p={3}>
              <ColorModeSwitcher justifySelf="flex-end" />
              <VStack spacing={8}>
                  <Logo h="40vmin" pointerEvents="none" />
                  <Text>
                      Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
                  </Text>
                  <Link
                      color="teal.500"
                      href="https://chakra-ui.com"
                      fontSize="2xl"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                      {label}
                  </Link>
              </VStack>
          </Grid>
      </Box>
  );
};

ChakraSplash.propTypes = {
    label: PropTypes.string.isRequired
};

ChakraSplash.defaultProps = {
    label: 'Learn Chakra'
};