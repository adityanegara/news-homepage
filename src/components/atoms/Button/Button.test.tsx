import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider, Global } from "@emotion/react";
import Button from "./Button";
import global from "../../../theme/global";
import theme from "../../../theme/styledTheme";

describe("Button", () => {
  it("Should be able to handle on click", () => {
    const onClick = jest.fn();
    render(
      <ThemeProvider theme={theme}>
        <Global styles={global} />
        <Button onClick={onClick}>Testing onClick</Button>
      </ThemeProvider>
    );
    const buttonElement = screen.getByText("Testing onClick");
    fireEvent.click(buttonElement);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
  it("Should show ripple when it is clicked", async () => {
    const onClick = jest.fn();
    render(
      <ThemeProvider theme={theme}>
        <Global styles={global} />
        <Button onClick={onClick}>Testing ripple</Button>
      </ThemeProvider>
    );
    const buttonElement = screen.getByText("Testing ripple");
    fireEvent.click(buttonElement);
    const ripple = await screen.findByRole("ripple");
    expect(ripple).toBeInTheDocument();
  });
  it("Should show the correct children inside the button", () => {
    const onClick = jest.fn();
    render(
      <ThemeProvider theme={theme}>
        <Global styles={global} />
        <Button onClick={onClick}>Testing children</Button>
      </ThemeProvider>
    );
    const buttonElement = screen.getByText("Testing children");
    expect(buttonElement).toHaveTextContent("Testing children");
  });
});
