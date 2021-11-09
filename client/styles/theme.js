import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
}

export const theme = extendTheme({
  config,
  fonts: {
    heading:
      'InterVariable, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
    body: 'InterVariable, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
    code: '"Source Code Pro", Menlo, Monaco, Consolas, "Courier New", monospace',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'black'
      },
    },
  }});
