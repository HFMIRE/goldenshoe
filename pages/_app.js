import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { UserProvider } from "@auth0/nextjs-auth0";
import React, { useEffect } from "react";
import { Provider } from "react-redux";
import store from "../redux/store";
import { loadState, saveState } from "../redux/browser-storage";
import { PersistGate } from "redux-persist/integration/react";
import { debounce } from "debounce";
import { useDispatch } from "react-redux";
import Layout from "../components/Layout";
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

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   loadState();
  // }, [dispatch]);

  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <UserProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </UserProvider>
      </Provider>
    </ChakraProvider>
  );
}
