import styled from "@emotion/styled";
import Button from "../../atoms/Button/Button";
import OpenNavbar from "../../../assets/icon-menu.svg";
import Logo from "../../../assets/logo.svg";

const NavbarMobileStyled = styled("nav")({
  marginTop: "3vh",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const NavbarMobile = (): JSX.Element => {
  return (
    <NavbarMobileStyled>
      <img src={Logo} alt="logo" />
      <Button
        role="sidebar-open-button"
        onClick={() => {
          console.log("click");
        }}
      >
        <img src={OpenNavbar} alt="open navbar"></img>
      </Button>
    </NavbarMobileStyled>
  );
};

export default NavbarMobile;
