import { createGlobalStyle} from 'styled-components';
import { createClient } from '@supabase/supabase-js'
import Navbar from '../components/navigation/Navbar';

// Create a single supabase client for interacting with your database
const supabase = createClient("https://xyzcompany.supabase.co", "public-anon-key")

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

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar/>
      <GlobalStyle/>
      <Component {...pageProps} />

    </>
  )
}

export default MyApp
