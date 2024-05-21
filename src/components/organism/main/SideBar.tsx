import { SidebarBox } from "./SideBarStyles";
import MainLogo from "../../atom/main/sidebar/MainLogo";
import SocialIcons from "../../molecules/main/sidebar/SocialIcons";

const Sidebar = () => (
  <SidebarBox>
    <MainLogo />
    <SocialIcons />
  </SidebarBox>
);

export default Sidebar;
