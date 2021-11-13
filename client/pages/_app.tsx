import { AppProps } from "next/dist/shared/lib/router/router";
import Navbar from "../components/navigation/Navbar";
import { ChakraProvider, ColorModeScript  } from "@chakra-ui/react"
import {theme} from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
      <Navbar />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
