import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider, Global } from "@emotion/react";
import global from "../../../theme/global";
import theme from "../../../theme/styledTheme";
import ArticleList from "./ArticleList";
import ARTICLES from "./ArticleListConstant";

describe("Article List", () => {
  fit("Should be able to render article list", () => {
    render(
      <ThemeProvider theme={theme}>
        <Global styles={global} />
        <ArticleList />
      </ThemeProvider>
    );
  });
  const articleListElement = screen.getAllByRole("article");

});
