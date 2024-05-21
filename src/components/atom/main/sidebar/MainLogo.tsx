import { Link } from "react-router-dom";
import { MainLogoImg } from "./MainLogoStyles";
import mainlogo from "../../../../assets/images/homepage_logo_top.svg";

const MainLogo = () => (
  <Link to="/">
    <MainLogoImg src={mainlogo} alt="MainLogo" />
  </Link>
);

export default MainLogo;
