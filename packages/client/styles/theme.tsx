import { extendTheme, space, ThemeConfig } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
  sm: '300px',
  md: '650px',
  lg: '900px',
  xl: '1200px',
  '2xl': '1536px',
});

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

export const theme = extendTheme({
  config,
  breakpoints,
  fonts: {
    heading:
      'InterVariable, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
    body: 'InterVariable, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
    code: '"Source Code Pro", Menlo, Monaco, Consolas, "Courier New", monospace',
  },
  fontSizes: {
    micro: '0.75rem',
    caption: '0.875rem',
    body3: '1rem',
    body2: '1.25rem',
    body1: '1.5rem',
    header5: '1.75rem',
    header4: '2rem',
    header3: '2.25rem',
    header2: '2.5rem',
    header1: '3rem',
    big2: '4.5rem',
    big1: '6rem',
    huge: '9rem',
  },
  styles: {
    global: {
      body: {
        initialColorMode: 'light',
        bg: 'utility.light80',
        color: 'black',
      },
    },
  },
  colors: {
    primary: {
      100: '#E2CBFE',
      200: '#C397FD',
      300: '#9F63F9',
      400: '#7F3CF3',
      500: '#4E00EC',
      600: '#3C00CA',
      700: '#2C00A9',
      800: '#1F0088',
      900: '#160071',
    },
    success: {
      100: '#F3FCCD',
      200: '#E5FA9D',
      300: '#CEF06B',
      400: '#B5E145',
      500: '#92CE10',
      600: '#77B10B',
      700: '#5E9408',
      800: '#487705',
      900: '#386203',
    },
    info: {
      100: '#CAFDF3',
      200: '#96FBF0',
      300: '#61F4F0',
      400: '#3AE1EA',
      500: '#00C0DD',
      600: '#0096BE',
      700: '#00719F',
      800: '#005180',
      900: '#003A6A',
    },
    warning: {
      100: '#FEF4CC',
      200: '#FEE69A',
      300: '#FED468',
      400: '#FDC243',
      500: '#FCA505',
      600: '#D88503',
      700: '#B56902',
      800: '#924F01',
      900: '#783D00',
    },
    danger: {
      100: '#FEE6D5',
      200: '#FDC7AC',
      300: '#FBA082',
      400: '#F87B62',
      500: '#F44130',
      600: '#D12323',
      700: '#AF1823',
      800: '#8D0F23',
      900: '#750923',
    },
    neutral: {
      100: '#F1F0F5',
      200: '#E4E2EC',
      300: '#BDBBC7',
      400: '#86848F',
      500: '#3F3E45',
      600: '#2F2D3B',
      700: '#211F31',
      800: '#151328',
      900: '#0D0B21',
    },
    utility: {
      light80: '#FCFCFC',
      dark80: '#08080A',
      aliterprimary: '#AD00FF',
      grad: 'linear-gradient(.25turn, #AD00FF, #4E00EC)',
    },
  },
  space: {
    micro: '4px',
    xs: '8px',
    small: '12px',
    medium: '16px',
    large: '24px',
    xl: '40px',
    xxl: '64px',
    jumbo: '128px',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
    12: '3rem',
    14: '3.5rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    28: '7rem',
    32: '8rem',
    36: '9rem',
    40: '10rem',
    44: '11rem',
    48: '12rem',
    52: '13rem',
    56: '14rem',
    60: '15rem',
    64: '16rem',
    72: '18rem',
    80: '20rem',
    96: '24rem',
  },
  components: {
    Button: {
      variants: {
        morePadding: {
          paddingLeft: 8,
          paddingRight: 8,
          paddingTop: 6,
          paddingBottom: 6 
        }
      }
    }
  }
});
