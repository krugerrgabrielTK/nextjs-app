import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "../styles/GlobalStyle";
import { defaultTheme } from "../styles/themes";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
