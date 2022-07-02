import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../utils/theme";
import NextNProgress from "nextjs-progressbar";
import { SessionProvider } from "next-auth/react";
import { wrapper } from "../redux/store";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SessionProvider session={pageProps.session}>
        <NextNProgress />
        <Component {...pageProps} />
        <ToastContainer />
      </SessionProvider>
    </ChakraProvider>
  );
}

export default wrapper.withRedux(MyApp);
