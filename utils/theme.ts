import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import "@fontsource/open-sans/500.css";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  ...config,
  fonts: {
    body: `'Open-Sans', sans-serif`,
    heading: `'Open-Sans', sans-serif`,
  },
});
export default theme;
