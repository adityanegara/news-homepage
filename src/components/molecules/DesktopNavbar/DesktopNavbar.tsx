import styled from "@emotion/styled";
import Logo from "../../../assets/logo.svg";

const NavbarContainer = styled.nav(({theme})=>({
  marginTop: "8vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  ".links":{
    color: theme.colors.neutral.darkGray,
    position: "relative",
    bottom: "2px",
    listStyleType: "none",
    padding: "0",
    margin: "0",
    display: "flex",
    gap: "25px",
    li: {
      a:{
        transition: "ease-in 0.2s",
        cursor: "pointer"
      },
      "a:hover":{
        color: theme.colors.primary.second,
      }
    }
  }
}));

const DesktopNavbar = () => {
  return (
    <NavbarContainer role="navbar-desktop">
      <img src={Logo} alt="Logo" />
      <ul className="links">
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>New</a>
        </li>
        <li>
          <a>Popular</a>
        </li>
        <li>
          <a>Trending</a>
        </li>
        <li>
          <a>Categories</a>
        </li>
      </ul>
    </NavbarContainer>
  );
};

export default DesktopNavbar;
