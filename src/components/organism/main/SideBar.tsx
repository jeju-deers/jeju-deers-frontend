import { SidebarContainer } from "./SideBarStyles";
import MainLogo from "../../atom/main/sidebar/MainLogo";
import SocialIcons from "../../molecules/main/sidebar/SocialIcons";

const Sidebar = () => (
  <SidebarContainer>
    <MainLogo />
    <SocialIcons />
  </SidebarContainer>
);

export default Sidebar;
