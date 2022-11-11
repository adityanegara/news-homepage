import styled from "@emotion/styled";
import Button from "../../atoms/Button/Button";
import OpenNavbar from "../../../assets/icon-menu.svg";
import Logo from "../../../assets/logo.svg";

const Navbar = styled("nav")({
  marginTop: "3vh",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const NavbarMobile = () => {
  return (
    <Navbar>
      <img src={Logo} alt="logo" />
      <Button
        onClick={() => {
          console.log("click");
        }}
      >
        <img src={OpenNavbar} alt="open navbar"></img>
      </Button>
    </Navbar>
  );
};

export default NavbarMobile;
