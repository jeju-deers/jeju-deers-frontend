import Menu from "~/components/atoms/main/header/Menu";
import { MenusBox } from "./MenusStyles";
import TAB_MENU_ITEMS from "~/constants/tabMenuItems";

const Menus = () => {
  return (
    <MenusBox>
      <Menu text="CLUB" tabMenuItems={TAB_MENU_ITEMS.club} />
      <Menu text="NEWS" tabMenuItems={TAB_MENU_ITEMS.news} />
      <Menu text="TEAM ROOM" tabMenuItems={TAB_MENU_ITEMS.teamroom} />
      <Menu text="COMMUNITY" tabMenuItems={TAB_MENU_ITEMS.community} />
    </MenusBox>
  );
};

export default Menus;
