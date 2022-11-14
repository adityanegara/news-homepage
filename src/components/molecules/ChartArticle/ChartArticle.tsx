import styled from "@emotion/styled";

interface ChartArticlesProps {
  image: string;
  rank: string;
  title: string;
  description: string;
}

const ChartArticleStyled = styled("article")(
  {
    display: "flex",
    gap: "25px",
    [".article-image"]: {
      width: "30%",
      height: "100%",
      objectFit: "cover",
    },
    [".article-info"]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      [".chart"]: {
        fontWeight: 800,
        fontSize: "2em",
      },
      [".title"]: {
        fontSize: "1.1em",
        fontWeight: 800,
        transition: "ease-in 0.2s",
        cursor: "pointer",
      },
    },
  },
  (props) => ({
    [".article-info"]: {
      [".chart"]: {
        color: props.theme.colors.neutral.gray,
      },
      [".title"]: {
        color: props.theme.colors.neutral.black,
        ["&:hover"]: {
          color: props.theme.colors.primary.second,
        },
      },
      [".description"]: {
        color: props.theme.colors.neutral.darkGray,
      },
    },
  })
);

const ChartArticles = ({
  image,
  title,
  rank,
  description,
}: ChartArticlesProps): JSX.Element => {
  return (
    <ChartArticleStyled>
      <img src={image} className="article-image" />
      <div className="article-info">
        <p className="chart">{rank}</p>
        <a className="title">{title}</a>
        <p className="description">{description}</p>
      </div>
    </ChartArticleStyled>
  );
};

export default ChartArticles;