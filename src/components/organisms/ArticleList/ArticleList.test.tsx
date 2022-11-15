import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider, Global } from "@emotion/react";
import global from "../../../theme/global";
import theme from "../../../theme/styledTheme";
import ArticleList from "./ArticleList";
import ARTICLES from "./ArticleListConstant";

describe("Article List", () => {
  it("Should show required message when the input is empty", () => {
    render(
      <ThemeProvider theme={theme}>
        <Global styles={global} />
        <ArticleList />
      </ThemeProvider>
    );
    const articleListElement = screen.getAllByRole("article");
    expect(articleListElement).toHaveLength(ARTICLES.length);
  });
});
