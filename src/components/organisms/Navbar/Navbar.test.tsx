import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ThemeProvider, Global } from "@emotion/react";
import global from "../../../theme/global";
import theme from "../../../theme/styledTheme";
import Navbar from "./Navbar";

describe("Navbar", () => {
  it("Should render mobile navbar when it is mobile view", () => {
    render(
      <ThemeProvider theme={theme}>
        <Global styles={global} />
        <Navbar screenSize="mobile" />
      </ThemeProvider>
    );
    const navbarMobile = screen.getByRole("navbar-mobile");
    expect(navbarMobile).toBeInTheDocument();
  });
  it("Should render mobile navbar when it is tablet view", () => {
    render(
      <ThemeProvider theme={theme}>
        <Global styles={global} />
        <Navbar screenSize="tablet" />
      </ThemeProvider>
    );
    const navbarMobile = screen.getByRole("navbar-mobile");
    expect(navbarMobile).toBeInTheDocument();
  });
  it("Should render desktop navbar when it is desktop view", () => {
    render(
      <ThemeProvider theme={theme}>
        <Global styles={global} />
        <Navbar screenSize="desktop" />
      </ThemeProvider>
    );
    const navbarDesktop = screen.getByRole("navbar-desktop");
    expect(navbarDesktop).toBeInTheDocument();
  });
});
