import ChartArticles from "../../molecules/ChartArticle/ChartArticle";
import ChartArticleModel from "../../../model/IChartArticle";
import styled from "@emotion/styled";
import zeroBeforeNumber from "../../../helpers/ZeroBeforeNumber/zeroBeforeNumber";

interface ChartProps {
  chartArticles: ChartArticleModel[];
}

const ChartStyled = styled("section")({
  marginTop: "5vh",
  marginBottom: "8vh",
  display: "flex",
  flexDirection: "column",
  gap: "30px",
});

const Chart = ({ chartArticles }: ChartProps) => {
  const renderChartArticles = (
    articles: ChartArticleModel[]
  ): JSX.Element[] => {
    return articles.map((article: ChartArticleModel, i) => {
      return (
        <ChartArticles
          key={article.id}
          title={article.title}
          description={article.description}
          rank={zeroBeforeNumber(i + 1)}
          image={article.image}
        />
      );
    });
  };

  return (
    <ChartStyled id="chart">{renderChartArticles(chartArticles)}</ChartStyled>
  );
};

export default Chart;
