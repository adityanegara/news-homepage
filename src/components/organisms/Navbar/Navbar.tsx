import MobileNavbar from "../../molecules/MobileNavbar/MobileNavbar";
import DesktopNavbar from "../../molecules/DesktopNavbar/DesktopNavbar";
import ScreenSizeModel from "../../../model/TScreenSize";

interface NavbarProps {
  screenSize: ScreenSizeModel;
}

const Navbar = ({ screenSize }: NavbarProps): JSX.Element => {
  const renderNavbar = (screenSize: ScreenSizeModel): JSX.Element => {
    return screenSize !== "desktop" ? <MobileNavbar /> : <DesktopNavbar />;
  };

  return renderNavbar(screenSize);
};

export default Navbar;
