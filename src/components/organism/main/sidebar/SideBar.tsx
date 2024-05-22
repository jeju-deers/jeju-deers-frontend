import { SidebarBox } from "./SideBarStyles";
import MainLogo from "~/components/atom/main/sidebar/MainLogo";
import SocialIcons from "~/components/molecules/main/sidebar/SocialIcons";

const Sidebar = () => (
  <SidebarBox>
    <MainLogo />
    <SocialIcons />
  </SidebarBox>
);

export default Sidebar;
