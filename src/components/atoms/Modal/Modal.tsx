import ReactDOM from "react-dom";
import styled from "@emotion/styled";
import { useOnClickOutside } from "usehooks-ts";
import { useRef } from 'react';
import Overlay from "../Overlay/Overlay";
import Button from "../Button/Button";
import CloseModal from "../../../assets/icon-menu-close.svg";

interface ModalProps {
  isModalOpen: boolean;
  setIsModalOpen: Function;
}

const ModalContainer = styled("div")(
  {
    overflowY: "scroll",
    position: "fixed",
    top: "0",
    right: "0",
    minHeight: "100vh",
    width: "65%",
    zIndex: "1000",
  },
  (props) => ({
    backgroundColor: props.theme.colors.neutral.white,
  })
);

const CloseButtonContainer = styled("div")({
  marginTop: "3vh",
  display: "flex",
  justifyContent: "flex-end",
});

const modalRoot = document.getElementById("modal") as HTMLElement;
const Modal = ({ isModalOpen, setIsModalOpen }: ModalProps) => {
  const renderModal = (isModalOpen: boolean): JSX.Element | null => {
    return isModalOpen ? (
      <Overlay>
        <ModalContainer>
          <CloseButtonContainer>
            <Button
              role="close-button"
              onClick={() => {
                setIsModalOpen(false);
              }}
            >
              <img src={CloseModal} alt="close modal" />
            </Button>
          </CloseButtonContainer>
        </ModalContainer>
      </Overlay>
    ) : null;
  };

  return ReactDOM.createPortal(renderModal(isModalOpen), modalRoot);
};

export default Modal;
