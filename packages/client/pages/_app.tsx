import { AppProps } from 'next/dist/shared/lib/router/router';

import Dashboard from '@/components/navigation/Dashboard';

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { theme } from '@/styles/theme';
import { DAppProvider } from '@usedapp/core';
import '@fortawesome/fontawesome-svg-core/styles.css';

import { AuthProvider } from '@/hooks/useAuth';
import { appWithTranslation } from 'next-i18next';

import '@fontsource/inter/variable-full.css';
import '@fontsource/source-code-pro/400.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <DAppProvider config={{}}>
        <ChakraProvider theme={theme}>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />

          <Dashboard />

          <Component {...pageProps} />
        </ChakraProvider>
      </DAppProvider>
    </AuthProvider>
  );
}

export default appWithTranslation(MyApp);
