import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

type RippleProps = {
  top: string;
  left: string;
};

const rippleAnimation = keyframes`
0%{
    opacity: 0;
    scale: 0.5;
}
35%{
    opacity: 1;
}
100%{
    opacity: 0;
    scale: 3.25;
}`;

const SpanStyled = styled("span")<RippleProps>(
  {
    display: "block",
    position: "absolute",
    zIndex: 1,
    width: "20px",
    height: "20px",
    marginTop: "-5px",
    marginLeft: "-5px",
    borderRadius: "50%",
    pointerEvents: "none",
    opacity: 0,
    background: "#d42869",
    animation: `${rippleAnimation} 0.5s both`,
  },
  (props) => ({
    top: props.top,
    left: props.left,
  })
);

const Ripple = ({ top, left }: RippleProps) => {
  return <SpanStyled id="ripple-shape" top={top} left={left}></SpanStyled>;
};

export default Ripple;
