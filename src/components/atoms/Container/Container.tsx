import styled from "@emotion/styled";
import React from "react";

const ContrainerStyled = styled("div")(
  {
    marginLeft: "auto",
    marginRight: "auto",
    width: "90%",
  },
  (props) => ({
    [`@media(min-width: ${props.theme.layout.mobile})`]: {
      width: "70%",
    },
    [`@media(min-width: ${props.theme.layout.desktop})`]: {
      width: "75%",
    },
  })
);

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps): JSX.Element => {
  return <ContrainerStyled>{children}</ContrainerStyled>;
};

export default Container;
