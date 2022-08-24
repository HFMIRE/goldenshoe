import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { UserProvider } from "@auth0/nextjs-auth0";
import React from "react";
import { Provider } from "react-redux";
import store from "../redux/store";
import { saveState } from "../redux/browser-storage";
import { PersistGate } from "redux-persist/integration/react";
import { debounce } from "debounce";
const theme = extendTheme({
  colors: {
    brand: {
      100: "#ADADA9",
      200: "#BE4A25",
      900: "#1a202c",
    },
  },
});
store.subscribe(
  debounce(() => {
    saveState(store.getState());
  }, 800)
);

export default function App({ Component, pageProps }) {
  if (!process.browser) React.useLayoutEffect = React.useEffect;

  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <UserProvider>
          <Component {...pageProps} />
        </UserProvider>
      </Provider>
    </ChakraProvider>
  );
}
