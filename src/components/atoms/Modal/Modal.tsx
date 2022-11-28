import ReactDOM from "react-dom";
import styled from "@emotion/styled";
import Overlay from "../Overlay/Overlay";

const ModalContainer = styled("div")(
  {
    overflowY: "scroll",
    position: "fixed",
    top: "0",
    right: "0",
    minHeight: "100vh",
    width: "65%",
    zIndex: "1000",
    [".modal-content"]: {
      marginTop: "3vh",
    },
  },
  (props) => ({
    backgroundColor: props.theme.colors.neutral.white,
  })
);

const modalRoot = document.getElementById("modal") as HTMLElement;
const Modal = () => {
  return ReactDOM.createPortal(
    <Overlay>
      <ModalContainer>Test</ModalContainer>
    </Overlay>,
    modalRoot
  );
};

export default Modal;
