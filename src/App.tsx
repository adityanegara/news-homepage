/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { css } from "@emotion/react/macro";
import { Global } from "@emotion/react";
import { ThemeProvider, Theme } from "@emotion/react";
import Container from "./components/atoms/Container/Container";
import Button from "./components/atoms/Button/Button";
import Navbar from "./components/molecules/navbar/Navbar";

const theme: Theme = {
  layout: {
    mobile: "375px",
    desktop: "1440px",
  },
  colors: {
    primary: {
      first: "hsl(35, 77%, 62%)",
      second: "hsl(5, 85%, 63%)",
    },
    neutral: {
      white: "hsl(36, 100%, 99%)",
      gray: "hsl(233, 8%, 79%)",
      darkGray: "hsl(236, 13%, 42%)",
      black: "hsl(240, 100%, 5%)",
    },
  },
  fonts: {
    paragraphFontSize: "15px",
    mainFont: "Inter",
    secondaryFont: "sans-serif",
  },
};

const global = css({
  ["body"]: {
    margin: 0,
    backgroundColor: theme.colors.neutral.white,
    boxSizing: "border-box",
    padding: 0,
    overflowX: "hidden",
    fontFamily: [theme.fonts.secondaryFont, theme.fonts.mainFont],
  },
  ["p"]: {
    margin: "0px",
  },
  ["button, input,"]: {
    fontFamily: [theme.fonts.secondaryFont, theme.fonts.mainFont],
    minWidth: "44px",
    minHeight: "44px",
    padding: "0px",
    margin: "0px",
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={global} />
      <Container>
        <Navbar/>
      </Container>
    </ThemeProvider>
  );
};

export default App;
