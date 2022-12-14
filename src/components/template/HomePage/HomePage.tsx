import styled from "@emotion/styled";
import Container from "../../atoms/Container/Container";
import Navbar from "../../organisms/Navbar/Navbar";
import Header from "../../organisms/Header/Header";
import ArticleList from "../../organisms/ArticleList/ArticleList";
import Chart from "../../organisms/Chart/Chart";
import useMediaQuery from "../../../hooks/useMediaQuery";
import theme from "../../../theme/styledTheme";
import ScreenSizeModel from "../../../model/TScreenSize";
import ARTICLES from "../../../constant/ArticleListConstant";
import CHART_ARTICLES from "../../../constant/ChartConstant";
import HEADER_ARTICLE from "../../../constant/HeaderConstant";

const ContentLayout = styled("div")(
  {
    display: "block",
  },
  (props) => ({
    [`@media(min-width: ${props.theme.layout.desktop})`]: {
      display: "flex",
    },
  })
);

const HomePage = (): JSX.Element => {
  const isScreenMobile = useMediaQuery(
    `(min-width: 0px) and (max-width: ${theme.layout.mobile})`
  );
  const isScreenTablet = useMediaQuery(
    `(min-width: ${theme.layout.mobile}) and (max-width: ${theme.layout.desktop})`
  );

  const getScreenSize = (): ScreenSizeModel => {
    if (isScreenMobile) {
      return "mobile";
    }
    if (isScreenTablet) {
      return "tablet";
    }
    return "desktop";
  };

  return (
    <Container screenSize={getScreenSize()}>
      <Navbar screenSize={getScreenSize()} />
      <ContentLayout>
        <Header screenSize={getScreenSize()} headerArticle={HEADER_ARTICLE} />
        <ArticleList articles={ARTICLES} />
      </ContentLayout>
      <Chart chartArticles={CHART_ARTICLES} />
    </Container>
  );
};

export default HomePage;
