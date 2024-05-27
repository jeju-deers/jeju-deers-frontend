import tabMenuItems from "~/components/atom/main/header/TabMenuItems";
import Menu from "./Menu";
import { MenusBox } from "./MenusStyles";

const Menus = () => {
  return (
    <MenusBox>
      <Menu to="/club" text="CLUB" tabMenuItems={tabMenuItems.club} />
      <Menu to="/news" text="NEWS" tabMenuItems={tabMenuItems.news} />
      <Menu to="/teamroom" text="TEAM ROOM" tabMenuItems={tabMenuItems.teamroom} />
      <Menu to="/community" text="COMMUNITY" tabMenuItems={tabMenuItems.community} />
    </MenusBox>
  );
};

export default Menus;
