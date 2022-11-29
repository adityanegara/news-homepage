import { useState } from "react";
import styled from "@emotion/styled";
import Button from "../../atoms/Button/Button";
import OpenNavbar from "../../../assets/icon-menu.svg";
import Logo from "../../../assets/logo.svg";
import Modal from "../../atoms/Modal/Modal";
import { useEffect } from "react";

const NavbarMobileStyled = styled("nav")({
  marginTop: "3vh",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const NavbarMobile = (): JSX.Element => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "visible";
    }
  }, [isSidebarOpen]);
  return (
    <>
      <NavbarMobileStyled role="navbar-mobile">
        <img src={Logo} alt="logo" />
        <Button
          role="sidebar-open-button"
          onClick={() => {
            setIsSidebarOpen(true);
          }}
        >
          <img src={OpenNavbar} alt="open navbar" />
        </Button>
      </NavbarMobileStyled>
      <Modal
        isModalOpen={isSidebarOpen}
        setIsModalOpen={setIsSidebarOpen}
      ></Modal>
    </>
  );
};

export default NavbarMobile;
