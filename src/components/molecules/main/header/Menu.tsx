import { NavLink } from "react-router-dom";
import { MenuBox, TabMenuWrap } from "./MenuStyles";
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
      <TabMenuWrap>
        <TabMenu tabMenuItems={tabMenuItems} />
      </TabMenuWrap>
    </MenuBox>
  );
};

export default Menu;
