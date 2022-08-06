import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import React from "react";
const theme = extendTheme({
  colors: {
    brand: {
      100: "#ADADA9",
      200: "#BE4A25",
      900: "#1a202c",
    },
  },
});

export default function App({ Component, pageProps }) {
  if (!process.browser) React.useLayoutEffect = React.useEffect;
  return (
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
  );
}
