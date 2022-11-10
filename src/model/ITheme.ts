import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    layout: {
      mobile: string;
      desktop: string;
    };
    colors: {
      primary: {
        first: string;
        second: string;
      };
      neutral: {
        white: string;
        gray: string;
        darkGray: string;
        black: string;
      };
    },
    fonts: {
      paragraphFontSize: string;
      mainFont: string;
      secondaryFont: string;
    };
  }
}
