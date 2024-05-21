import { Link } from "react-router-dom";
import { MainLogoImage } from "./MainLogoStyles";
import mainlogo from "../../../../assets/images/homepage_logo_top.svg";

const MainLogo = () => (
  <Link to="/">
    <MainLogoImage src={mainlogo} alt="MainLogo" />
  </Link>
);

export default MainLogo;
