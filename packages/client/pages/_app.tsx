import { AppProps } from 'next/dist/shared/lib/router/router';

import Dashboard from '@/components/navigation/Dashboard';
import { ChakraProvider, ColorModeScript, Box } from '@chakra-ui/react';
import { theme } from '../styles/theme';
import { DAppProvider } from '@usedapp/core';
import '@fortawesome/fontawesome-svg-core/styles.css';

import { AuthProvider } from '@/hooks/useAuth';
import { appWithTranslation } from 'next-i18next';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <DAppProvider config={{}}>
        <ChakraProvider theme={theme}>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Box pb="10">
            <Dashboard />
          </Box>
          <Box pt="10" w="75" pl="3">
            <Component {...pageProps} />
          </Box>
        </ChakraProvider>
      </DAppProvider>
    </AuthProvider>
  );
}

export default appWithTranslation(MyApp);
