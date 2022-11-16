import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ThemeProvider, Global } from "@emotion/react";
import global from "../../../theme/global";
import theme from "../../../theme/styledTheme";
import Chart from "./Chart";
import CHART_ARTICLES from "../../../constant/ChartConstant";

describe("Article List", () => {
  it("Should show required message when the input is empty", () => {
    render(
      <ThemeProvider theme={theme}>
        <Global styles={global} />
        <Chart chartArticles={CHART_ARTICLES} />
      </ThemeProvider>
    );
    const articleListElement = screen.getAllByRole("chart-article");
    expect(articleListElement).toHaveLength(CHART_ARTICLES.length);
  });
});
