import { AppProps } from "next/dist/shared/lib/router/router";
import Navbar from "../components/navigation/Navbar";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { DAppProvider } from "@usedapp/core";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DAppProvider config={{}}>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Navbar />
        <Component {...pageProps} />
      </ChakraProvider>
    </DAppProvider>
  );
}

export default MyApp;
