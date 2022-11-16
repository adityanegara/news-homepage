import styled from "@emotion/styled";
import HeaderImage from "../../../assets/image-web-3-mobile.jpg";
import elipsisOnText from "../../../helpers/ElipsisOnText/elipsisOnText";
import textElipsis from "../../../constant/elipsisConstant";
import Button from "../../atoms/Button/Button";
import { useTheme } from "@emotion/react";
import HeaderModel from "../../../model/IHeader";
import ScreenSizeModel from "../../../model/TScreenSize";

interface HeaderProps {
  headerArticle: HeaderModel;
  screenSize: ScreenSizeModel;
}

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
    lineHeight: "28px",
    fontSize: "1.2em",
    fontWeight: 400,
  },
  (props) => ({
    color: props.theme.colors.neutral.darkGray,
  })
);

const renderImage = (
  screenSize: ScreenSizeModel,
  header: HeaderModel
): string => {
  return screenSize !== "desktop" ? header.mobileImage : header.desktopImage;
};

const Header = ({ headerArticle, screenSize }: HeaderProps): JSX.Element => {
  const theme = useTheme();
  return (
    <HeaderStyled>
      <img src={renderImage(screenSize, headerArticle)} alt="web 3.0" />
      <HeaderOne>
        {elipsisOnText(headerArticle.title, textElipsis.headerTitle)}
      </HeaderOne>
      <Description>
        {elipsisOnText(
          headerArticle.description,
          textElipsis.headerDescription
        )}
      </Description>
      <CallToAction
        buttonColor={theme.colors.primary.second}
        buttonHoverColor={theme.colors.neutral.black}
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
