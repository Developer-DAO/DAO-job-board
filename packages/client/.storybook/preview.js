import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme';


export const decorators = [
  (Story) => (
    <ChakraProvider theme={theme}>
      <Story />
    </ChakraProvider>
  ),
];

export const parameters = {
  controls: { expanded: true },
  viewMode: 'docs'
};
