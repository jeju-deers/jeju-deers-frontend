import { SidebarContainer } from "./SideBarStyles";
import SidebarLogo from "../../atom/main/sidebar/Logo";
import Social from "../../molecules/main/sidebar/SocialIcons";

const Sidebar = () => (
  <SidebarContainer>
    <SidebarLogo />
    <Social />
  </SidebarContainer>
);

export default Sidebar;
