import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider, Global } from "@emotion/react";
import global from "../../../theme/global";
import theme from "../../../theme/styledTheme";
import NavbarMobile from "./NavbarMobile";

describe("Navbar Mobile", () => {
  it("Should be able to open navbar when navbar open button clicked", async () => {
    render(
      <ThemeProvider theme={theme}>
        <Global styles={global} />
        <NavbarMobile />
      </ThemeProvider>
    );
    const navbarOpenButton = screen.getByRole("sidebar-open-button");
    fireEvent.click(navbarOpenButton);
    const sidebar = await screen.findByRole("sidebar");
    expect(sidebar).toBeInTheDocument();
  });
});
