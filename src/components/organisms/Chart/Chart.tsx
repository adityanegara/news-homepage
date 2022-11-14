import ChartArticles from "../../molecules/ChartArticle/ChartArticle";
import CHART_ARTICLES from "./ChartConstant";
import ChartArticleModel from "../../../model/IChartArticle";
import styled from "@emotion/styled";

const ChartStyled = styled("section")({
  marginTop: "5vh",
  marginBottom: "8vh",
  display: "flex",
  flexDirection: "column",
  gap: "30px",
});

const Chart = () => {
  const renderChartArticles = (
    articles: ChartArticleModel[]
  ): JSX.Element[] => {
    return articles.map((article: ChartArticleModel, i) => {
      return (
        <ChartArticles
          title={article.title}
          description={article.description}
          rank={`0${i + 1}`}
          image={article.image}
        />
      );
    });
  };

  return (
    <ChartStyled id="chart">{renderChartArticles(CHART_ARTICLES)}</ChartStyled>
  );
};

export default Chart;
