import styled from "@emotion/styled";

interface OverlayProps {
  children: JSX.Element;
}

const OverlayContainer = styled("div")({
  position: "fixed",
  top: "0",
  left: "0",
  right: "0",
  bottom: "0",
  backgroundColor: "rgba(0,0,0,0.7)",
  zIndex: "1000",
});

const Overlay = ({ children }: OverlayProps): JSX.Element => {
  return <OverlayContainer>{children}</OverlayContainer>;
};

export default Overlay;