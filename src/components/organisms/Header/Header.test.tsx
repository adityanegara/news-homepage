import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ThemeProvider, Global } from "@emotion/react";
import global from "../../../theme/global";
import theme from "../../../theme/styledTheme";
import textElipsis from "../../../constant/elipsisConstant";
import Header from "./Header";
import HEADER_ARTICLE from "../../../constant/HeaderConstant";
import HeaderModel from "../../../model/IHeader";

const longHeaderArticle: HeaderModel = {
  id: 1,
  title:
    "Article Titleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
  description:
    "Article Descriptionnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn",
  desktopImage: HEADER_ARTICLE.desktopImage,
  mobileImage: HEADER_ARTICLE.mobileImage,
};

describe("Article", () => {
  it("Should be able to display mobile image when in mobile", () => {
    render(
      <ThemeProvider theme={theme}>
        <Global styles={global} />
        <Header screenSize="mobile" headerArticle={HEADER_ARTICLE} />
      </ThemeProvider>
    );
    const headerImage = screen.getByRole("header-image");
    expect(headerImage).toHaveAttribute("src", HEADER_ARTICLE.mobileImage);
  });
  it("Should be able to display mobile image when in tablet", () => {
    render(
      <ThemeProvider theme={theme}>
        <Global styles={global} />
        <Header screenSize="tablet" headerArticle={HEADER_ARTICLE} />
      </ThemeProvider>
    );
    const headerImage = screen.getByRole("header-image");
    expect(headerImage).toHaveAttribute("src", HEADER_ARTICLE.mobileImage);
  });
  it("Should be able to display desktop image when in desktop", () => {
    render(
      <ThemeProvider theme={theme}>
        <Global styles={global} />
        <Header screenSize="desktop" headerArticle={HEADER_ARTICLE} />
      </ThemeProvider>
    );
    const headerImage = screen.getByRole("header-image");
    expect(headerImage).toHaveAttribute("src", HEADER_ARTICLE.desktopImage);
  });
  it("Should be able to display elipsis on a long title", () => {
    render(
      <ThemeProvider theme={theme}>
        <Global styles={global} />
        <Header screenSize="desktop" headerArticle={longHeaderArticle} />
      </ThemeProvider>
    );
    const headerTitle = screen.getByRole("header-title").textContent;
    expect(headerTitle).toHaveLength(textElipsis.headerTitle + 3);
  });
  it("Should be able to display elipsis on a long description", () => {
    render(
      <ThemeProvider theme={theme}>
        <Global styles={global} />
        <Header screenSize="desktop" headerArticle={longHeaderArticle} />
      </ThemeProvider>
    );
    const headerDescription =
      screen.getByRole("header-description").textContent;
    expect(headerDescription).toHaveLength(textElipsis.headerDescription + 3);
  });
  it("Should be able to display header content correctly", () => {
    render(
      <ThemeProvider theme={theme}>
        <Global styles={global} />
        <Header screenSize="mobile" headerArticle={HEADER_ARTICLE} />
      </ThemeProvider>
    );
    const headerTitle = screen.getByRole("header-title");
    const headerDescription = screen.getByRole("header-description");
    const headerImage = screen.getByRole("header-image");
    expect(headerTitle).toHaveTextContent(HEADER_ARTICLE.title);
    expect(headerDescription).toHaveTextContent(HEADER_ARTICLE.description);
    expect(headerImage).toHaveAttribute("src", HEADER_ARTICLE.mobileImage);
  });
});
