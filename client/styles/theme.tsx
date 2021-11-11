import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import { createBreakpoints } from "@chakra-ui/theme-tools"

const breakpoints = createBreakpoints({
  sm: "300px",
  md: "650px",
  lg: "900px",
  xl: "1200px",
  "2xl": "1536px",
})

const config : ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
}

export const theme = extendTheme({
  config,
  breakpoints,
  fonts: {
    heading:
      'InterVariable, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
    body: 'InterVariable, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
    code: '"Source Code Pro", Menlo, Monaco, Consolas, "Courier New", monospace',
  },
  styles: {
    global: {
      body: {
        initialColorMode: "light",
        bg: 'gray.50',
        color: 'black'
      },
    },
  }});
