import { AppProps } from 'next/dist/shared/lib/router/router';
import Navbar from '../components/navigation/Navbar';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { theme } from '../styles/theme';
import { DAppProvider } from '@usedapp/core';

import { AuthProvider } from '@/hooks/useAuth';
import { appWithTranslation } from 'next-i18next';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <DAppProvider config={{}}>
        <ChakraProvider theme={theme}>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Navbar />
          <Component {...pageProps} />
        </ChakraProvider>
      </DAppProvider>
    </AuthProvider>
  );
}

export default appWithTranslation(MyApp);
