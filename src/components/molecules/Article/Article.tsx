import elipsisOnText from "../../../helpers/ElipsisOnText/elipsisOnText";
import styled from "@emotion/styled";
import textElipsis from "../../../constant/elipsisConstant";

interface ArticleProps {
  title: string;
  description: string;
  borderBottom?: boolean;
}

const ArticleStyled = styled("article")<{ borderBottom?: boolean }>(
  {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    paddingBottom: "20px",
    marginTop: "20px",
    [".article-title"]: {
      fontWeight: 700,
      transition: "ease-in 0.2s",
      cursor: "pointer",
    },
    [".article-description"]: {
      fontWeight: 400,
    },
  },
  (props) => ({
    [".article-title"]: {
      color: props.theme.colors.neutral.white,
      ["&:hover"]: {
        color: props.theme.colors.primary.first,
      },
    },
    [".article-description"]: {
      color: props.theme.colors.neutral.gray,
    },
    borderBottom: props.borderBottom
      ? `1px solid ${props.theme.colors.neutral.white}`
      : "none",
  })
);

const Article = ({
  title,
  description,
  borderBottom,
}: ArticleProps): JSX.Element => {
  return (
    <ArticleStyled role="article" borderBottom={borderBottom}>
      <a role="article-title" className="article-title">
        {elipsisOnText(title, textElipsis.articleTitle)}
      </a>
      <p role="article-description" className="article-description">
        {elipsisOnText(description, textElipsis.articleDescription)}
      </p>
    </ArticleStyled>
  );
};

export default Article;
