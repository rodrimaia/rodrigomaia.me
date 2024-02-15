//import '../styles/globals.css'
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "@fontsource/fira-code/500.css";
import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import { Layout } from "../components/Layout";

const customTheme = {
  fonts: {
    heading: "Fira Code",
    body: "Fira Code",
  },
  colors: {
    haiti: "#171031",
    lightGray: "#EAECF8",
    blue: "#00C8FF",
    pink: "#F700DE",
  },
};

const theme = extendTheme(customTheme);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
      <Analytics />
    </>
  );
}
export default MyApp;
