import { motion } from "framer-motion";
import styled from "@emotion/styled";

interface OverlayProps {
  children: JSX.Element;
}

const OverlayContainer = styled(motion.div)({
  position: "fixed",
  top: "0",
  left: "0",
  right: "0",
  bottom: "0",
  backgroundColor: "rgba(0,0,0,0.7)",
  zIndex: "1000",
});

const Overlay = ({ children }: OverlayProps): JSX.Element => {
  return (
    <OverlayContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    
    >
      {children}
    </OverlayContainer>
  );
};

export default Overlay;
