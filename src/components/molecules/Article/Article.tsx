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
    },
    [".article-description"]: {
      fontWeight: 400,
    },
  },
  (props) => ({
    [".article-title"]: {
      color: props.theme.colors.neutral.white,
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
      <p className="article-title">{title}</p>
      <p className="article-description">{description}</p>
    </ArticleStyled>
  );
};

export default Article;
