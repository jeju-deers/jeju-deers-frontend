import tabMenuItems from "~/components/atom/main/header/TabMenuItems";
import Menu from "./Menu";
import { MenusBox } from "./MenusStyles";

const Menus = () => {
  return (
    <MenusBox>
      <Menu to="/" text="CLUB" tabMenuItems={tabMenuItems.club} />
      <Menu to="/" text="NEWS" tabMenuItems={tabMenuItems.news} />
      <Menu to="/" text="TEAM ROOM" tabMenuItems={tabMenuItems.teamroom} />
      <Menu to="/" text="COMMUNITY" tabMenuItems={tabMenuItems.community} />
    </MenusBox>
  );
};

export default Menus;
