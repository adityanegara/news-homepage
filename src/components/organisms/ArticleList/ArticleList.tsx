import styled from "@emotion/styled";
import Article from "../../molecules/Article/Article";
import ARTICLES from "./ArticleListConstant";
import ArticleModel from "../../../model/IArticle";

const ArticleListStyled = styled("section")(
  {
    marginTop: "5vh",
    marginBottom: "3vh",
    marginLeft: "auto",
    marginRight: "auto",
  },
  (props) => ({
    backgroundColor: props.theme.colors.neutral.black,
  })
);

const HeadingTwo = styled("h2")({}, (props) => ({
  color: props.theme.colors.primary.first,
}));

const ArticleListContainer = styled("div")({
  width: "90%",
  marginLeft: "auto",
  marginRight: "auto",
  paddingTop: "1vh",
  paddingBottom: "1vh",
});

const renderArticles = (articles: ArticleModel[]): JSX.Element[] => {
  return articles.map((article: ArticleModel, i) => {
    return i == articles.length - 1 ? (
      <Article
        key={article.id}
        title={article.title}
        description={article.description}
        borderBottom={false}
      />
    ) : (
      <Article
        key={article.id}
        title={article.title}
        description={article.description}
        borderBottom={true}
      />
    );
  });
};

const ArticleList = (): JSX.Element => {
  return (
    <ArticleListStyled id="article list">
      <ArticleListContainer>
        <HeadingTwo>New</HeadingTwo>
        {renderArticles(ARTICLES)}
      </ArticleListContainer>
    </ArticleListStyled>
  );
};

export default ArticleList;
