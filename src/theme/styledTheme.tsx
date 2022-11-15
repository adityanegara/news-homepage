import { Theme } from "@emotion/react";

const theme: Theme = {
  layout: {
    mobile: "375px",
    desktop: "1000px",
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

export default theme;
