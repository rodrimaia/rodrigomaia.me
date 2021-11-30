//import '../styles/globals.css'
import {
  ChakraProvider,
  extendTheme
} from "@chakra-ui/react";
import "@fontsource/open-sans/500.css";
import splitbee from "@splitbee/web";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { Layout } from "../components/Layout";

const customTheme = {
  fonts: {
    heading: "Open Sans",
    body: "Open Sans",
  },
  colors: {
    haiti: "#161130",
    lightGray: "#EBECF8",
    blue: "#42C6FF",
    pink: "#DF85FF",
    brand: {
      900: "#1a365d",
      800: "#153e75",
      700: "#2a69ac",
    },
  },
};


const theme = extendTheme(customTheme);

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    splitbee.init({
      scriptUrl: "/bee.js",
      apiUrl: "/_hive",
    })
  }, [])
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
export default MyApp;
