import { NavLink } from "react-router-dom";
import { MenuBox } from "./MenuStyles";
import TabMenu from "./TabMenu";

interface Props {
  to: string;
  text: string;
  tabMenuItems: { to: string; text: string }[];
}

const Menu = ({ to, text, tabMenuItems }: Props) => {
  return (
    <MenuBox>
      <NavLink to={to}>{text}</NavLink>
      <TabMenu tabMenuItems={tabMenuItems} />
    </MenuBox>
  );
};

export default Menu;
