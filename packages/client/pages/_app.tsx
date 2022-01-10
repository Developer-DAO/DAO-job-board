import { AppProps } from 'next/dist/shared/lib/router/router';

import MainComponent from '@/components/MainComponent';
import Footer from '@/components/navigation/Footer';

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { theme } from '@/styles/theme';
import { DAppProvider } from '@usedapp/core';
import '@fortawesome/fontawesome-svg-core/styles.css';

import { AuthProvider } from '@/hooks/useAuth';
import { appWithTranslation } from 'next-i18next';
import { useEthers } from '@usedapp/core';

import '@fontsource/inter/variable-full.css';

function MyApp({ Component, pageProps }: AppProps) {
  const { account } = useEthers();

  return (
    <AuthProvider>
      <DAppProvider config={{}}>
        <ChakraProvider theme={theme}>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />

          {account && <div>Welcome {account}</div>}

          <MainComponent />
          <Component {...pageProps} />
          <Footer />
        </ChakraProvider>
      </DAppProvider>
    </AuthProvider>
  );
}

export default appWithTranslation(MyApp);
