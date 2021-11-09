import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import { createBreakpoints } from "@chakra-ui/theme-tools"

// 2. Update the breakpoints as key-value pairs
const breakpoints = createBreakpoints({
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
})

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
  }, config, createBreakpoints});
