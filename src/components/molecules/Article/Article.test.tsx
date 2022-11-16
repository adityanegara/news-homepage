import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ThemeProvider, Global } from "@emotion/react";
import global from "../../../theme/global";
import theme from "../../../theme/styledTheme";
import Article from "./Article";
import textElipsis from "../../../constant/elipsisConstant";

describe("Article", () => {
  beforeEach(() => {
    render(
      <ThemeProvider theme={theme}>
        <Global styles={global} />
        <Article
          title="Hydrogen VS Electric Carsddddddddddddddddeee"
          description="Will hydrogen-fueled cars ever catch up to EVs?eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedddddd"
        />
      </ThemeProvider>
    );
  });
  it("Should be able to render elipsis on title", () => {
    const articleTitleElement = screen.getByRole("article-title").textContent;
    expect(articleTitleElement).toHaveLength(textElipsis.articleTitle + 3);
  });
  it("Should be able to render elipsis on description", () => {
    const articleDescriptionElement = screen.getByRole(
      "article-description"
    ).textContent;
    expect(articleDescriptionElement).toHaveLength(
      textElipsis.articleDescription + 3
    );
  });
  it("Should be able to render the article correctly", () => {
    const articleTitleElement = screen.getByRole("article-title");
    const articleDescriptionElement = screen.getByRole("article-description");
    expect(articleTitleElement).toHaveTextContent(
      "Hydrogen VS Electric Carsddddd..."
    );
    expect(articleDescriptionElement).toHaveTextContent(
      "Will hydrogen-fueled cars ever catch up to EVs?eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee..."
    );
  });
});
