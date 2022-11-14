import styled from "@emotion/styled";
import Container from "../../atoms/Container/Container";
import Navbar from "../../organisms/Navbar/Navbar";
import Header from "../../organisms/Header/Header";
import ArticleList from "../../organisms/ArticleList/ArticleList";
import Chart from "../../organisms/Chart/Chart";

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
  return (
    <Container>
      <Navbar />
      <ContentLayout>
        <Header />
        <ArticleList />
      </ContentLayout>
      <Chart />
    </Container>
  );
};

export default HomePage;
