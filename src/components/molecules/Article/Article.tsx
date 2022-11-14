import elipsisOnText from "../../../helpers/elipsisOnText";
import styled from "@emotion/styled";

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
    <ArticleStyled borderBottom={borderBottom}>
      <a className="article-title">{elipsisOnText(title, 30)}</a>
      <p className="article-description">{elipsisOnText(description, 80)}</p>
    </ArticleStyled>
  );
};

export default Article;
