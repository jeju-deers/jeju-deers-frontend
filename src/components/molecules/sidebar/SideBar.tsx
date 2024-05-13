import { Logo, SidebarContainer, SocialIcon, SocialIcons } from "./SideBarStyles";
import logo from "../../../assets/images/homepage_logo_top.svg";
import youtube from "../../../assets/images/youtube_logo.svg";
import instagram from "../../../assets/images/instagram_logo.svg";

export const Sidebar = () => (
  <SidebarContainer>
    <Logo src={logo} alt="Logo" />
    <SocialIcons>
      <SocialIcon src={instagram} alt="Instagram" />
      <SocialIcon src={youtube} alt="YouTube" />
    </SocialIcons>
  </SidebarContainer>
);
