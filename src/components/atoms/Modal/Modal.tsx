import ReactDOM from "react-dom";
import styled from "@emotion/styled";
import { useOnClickOutside } from "usehooks-ts";
import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";
import Overlay from "../Overlay/Overlay";
import Button from "../Button/Button";
import CloseModal from "../../../assets/icon-menu-close.svg";

interface ModalProps {
  isModalOpen: boolean;
  setIsModalOpen: Function;
}

const ModalContainer = styled(motion.div)(
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
  const ref = useRef(null);
  const handleClickOutside = () => {
    setIsModalOpen(false);
  };
  useOnClickOutside(ref, handleClickOutside);

  const renderModal = (isModalOpen: boolean): JSX.Element | null => {
    return isModalOpen ? (
      <Overlay>
        <ModalContainer
          initial={{ opacity: 0, x: 100}}
          exit={{ opacity: 0, x: 100}}
          animate={{ opacity: 1, x: 0}}
          transition={{
            duration: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          ref={ref}
        >
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

  return ReactDOM.createPortal(
    <AnimatePresence>{renderModal(isModalOpen)}</AnimatePresence>,
    modalRoot
  );
};

export default Modal;
