import tabMenuItems from "~/components/atoms/main/header/tabMenuItems";
import Menu from "~/components/atoms/main/header/Menu";
import { MenusBox } from "./MenusStyles";

const Menus = () => {
  return (
    <MenusBox>
      <Menu text="CLUB" tabMenuItems={tabMenuItems.club} />
      <Menu text="NEWS" tabMenuItems={tabMenuItems.news} />
      <Menu text="TEAM ROOM" tabMenuItems={tabMenuItems.teamroom} />
      <Menu text="COMMUNITY" tabMenuItems={tabMenuItems.community} />
    </MenusBox>
  );
};

export default Menus;
