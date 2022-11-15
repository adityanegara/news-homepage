import styled from "@emotion/styled";
import React from "react";
import ScreenSizeModel from "../../../model/TScreenSize";
import ScreenToSize from "./MapScreenToSize";

const ContrainerStyled = styled("div")<{
  screenSize: ScreenSizeModel;
}>(
  {
    marginLeft: "auto",
    marginRight: "auto",
  },
  (props) => ({
    width: `${ScreenToSize[props.screenSize]}%`,
  })
);

interface ContainerProps {
  children: React.ReactNode;
  screenSize: ScreenSizeModel;
}

const Container = ({ children, screenSize }: ContainerProps): JSX.Element => {
  return (
    <ContrainerStyled role="container" screenSize={screenSize}>
      {children}
    </ContrainerStyled>
  );
};

export default Container;
