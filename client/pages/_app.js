import { createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
html {
  background: #F7FAFC;
  display:block;
  height: 100%;
  max-width: 100%;
  margin:0 auto;
  padding: 0;
}

body {
  background-color:#F7FAFC;
  min-height: 100%;
  padding: 1rem;
  margin-top:0;
  font-family: InterVariable, -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
}
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
