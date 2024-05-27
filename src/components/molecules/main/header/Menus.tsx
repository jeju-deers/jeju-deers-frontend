import Menu from "~/components/atom/main/header/Menu";
import { MenusBox } from "./MenusStyles";

const Menus = () => {
  return (
    <MenusBox>
      <Menu to="/club" text="CLUB" />
      <Menu to="/news" text="NEWS" />
      <Menu to="/teamroom" text="TEAM ROOM" />
      <Menu to="/community" text="COMMUNITY" />
    </MenusBox>
  );
};

export default Menus;
