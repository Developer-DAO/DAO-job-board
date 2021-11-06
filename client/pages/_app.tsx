import { AppProps } from "next/dist/shared/lib/router/router";
import { createGlobalStyle } from "styled-components";
import Navbar from "../components/navigation/Navbar";

const GlobalStyle = createGlobalStyle`
html,
body {
  height: 100%;
  font-family: InterVariable, -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
  background-color:#F7FAFC;
}

footer {
  position: absolute;
  display: block;
  left:0;
  bottom:0;
  right:0;
}
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
