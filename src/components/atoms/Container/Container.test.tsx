import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ThemeProvider, Global } from "@emotion/react";
import global from "../../../theme/global";
import theme from "../../../theme/styledTheme";
import Container from "./Container";
import screenToSize from "./MapScreenToSize";

describe("Container", () => {
  it(`Should narrow down the width to ${screenToSize["mobile"]}% when in mobile`, () => {
    render(
      <ThemeProvider theme={theme}>
        <Global styles={global} />
        <Container screenSize="mobile">
          <p>testing</p>
        </Container>
      </ThemeProvider>
    );
    const container = screen.getByRole("container");
    expect(container).toHaveStyle(`width : ${screenToSize["mobile"]}%`);
  });
  it(`Should narrow down the width to ${screenToSize["tablet"]}% when in tablet`, () => {
    render(
      <ThemeProvider theme={theme}>
        <Global styles={global} />
        <Container screenSize="tablet">
          <p>testing</p>
        </Container>
      </ThemeProvider>
    );
    const container = screen.getByRole("container");
    expect(container).toHaveStyle(`width : ${screenToSize["tablet"]}%`);
  });
  it(`Should narrow down the width to ${screenToSize["desktop"]}% when in desktop`, () => {
    render(
      <ThemeProvider theme={theme}>
        <Global styles={global} />
        <Container screenSize="desktop">
          <p>testing</p>
        </Container>
      </ThemeProvider>
    );
    const container = screen.getByRole("container");
    expect(container).toHaveStyle(`width : ${screenToSize.desktop}%`);
  });
  it("Should be able to show the children", () => {
    render(
      <ThemeProvider theme={theme}>
        <Global styles={global} />
        <Container screenSize="mobile">
          <p role="testing">Testing children</p>
        </Container>
      </ThemeProvider>
    );
    const testingElement = screen.getByRole("testing");
    expect(testingElement).toHaveTextContent("Testing children");
  });
});
