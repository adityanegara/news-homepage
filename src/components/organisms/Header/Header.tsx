import styled from "@emotion/styled";
import HeaderImage from "../../../assets/image-web-3-mobile.jpg";
import Button from "../../atoms/Button/Button";
import { useTheme } from "@emotion/react";

const HeaderStyled = styled("header")({
  marginTop: "3vh",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
});

const HeaderOne = styled("h1")(
  {
    fontWeight: "800",
    fontSize: "2.5em",
    padding: 0,
    margin: 0,
  },
  (props) => ({
    color: props.theme.colors.neutral.black,
  })
);

const CallToAction = styled(Button)({
  width: "50%",
  fontWeight: "700",
});

const Description = styled("p")(
  {
    lineHeight: "25px",
    fontSize: "1.2em",
    fontWeight: 400,
  },
  (props) => ({
    color: props.theme.colors.neutral.darkGray,
  })
);

const Header = () => {
  const theme = useTheme();
  return (
    <HeaderStyled>
      <img src={HeaderImage} alt="web 3.0" />
      <HeaderOne>The Bright Future of Web 3.0?</HeaderOne>
      <Description>
        We dive into the next evolution of the web that claims to put the power
        of the platforms back into the hands of the people. But is it really
        fullfilling its promise?
      </Description>
      <CallToAction
        buttonColor={theme.colors.primary.second}
        rippleColor={theme.colors.primary.first}
        onClick={(e) => {
          console.log("clicked");
        }}
      >
        READ MORE
      </CallToAction>
    </HeaderStyled>
  );
};

export default Header;
