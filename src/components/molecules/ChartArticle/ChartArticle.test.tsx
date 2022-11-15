import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ThemeProvider, Global } from "@emotion/react";
import global from "../../../theme/global";
import theme from "../../../theme/styledTheme";
import ChartArticles from "./ChartArticle";
import CHART_ARTICLES from "../../organisms/Chart/ChartConstant";
import textElipsis from "../../../helpers/ElipsisOnText/elipsisConstant";

describe("Article", () => {
  beforeEach(() => {
    render(
      <ThemeProvider theme={theme}>
        <Global styles={global} />
        <ChartArticles
          rank={`${CHART_ARTICLES[0].id}`}
          title={"Long Titleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"}
          description={
            "Long Descriptionnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn"
          }
          image={CHART_ARTICLES[0].image}
        />
      </ThemeProvider>
    );
  });
  it("Should be able to render elipsis on title", () => {
    const chartTitleElement = screen.getByRole("chart-title").textContent;
    expect(chartTitleElement).toHaveLength(textElipsis.chartArticleTitle + 3);
  });
  it("Should be able to render elipsis on description", () => {
    const chartDescriptionElement =
      screen.getByRole("chart-description").textContent;
    expect(chartDescriptionElement).toHaveLength(
      textElipsis.chartArticleDescription + 3
    );
  });
  it("Should render the correct element", () => {
    const chartRankElement = screen.getByRole("chart-rank");
    const chartTitleElement = screen.getByRole("chart-title");
    const chartDescriptionElement = screen.getByRole("chart-description");
    const chartImage = screen.getByRole("chart-image");

    expect(chartRankElement).toHaveTextContent(`${CHART_ARTICLES[0].id}`)
    expect(chartTitleElement).toHaveTextContent(
      "Long Titleeeeeeeeeeeeeeeeeeeee..."
    );
    expect(chartDescriptionElement).toHaveTextContent(
      "Long Descriptionnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn..."
    );
    expect(chartImage).toHaveAttribute('src', CHART_ARTICLES[0].image);
  });
});
