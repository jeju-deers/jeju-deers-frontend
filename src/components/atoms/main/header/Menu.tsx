import { Link } from "react-router-dom";
import { MenuBox, Tab, TabMenuBox, TabMenuItemBox, TabMenuWrap } from "./MenuStyles";

interface Props {
  text: string;
  tabMenuItems: { to: string; text: string }[];
}

const Menu = ({ text, tabMenuItems }: Props) => {
  return (
    <MenuBox>
      <Tab>{text}</Tab>
      <TabMenuWrap>
        <TabMenuBox>
          {tabMenuItems.map((tabMenuItem, index) => (
            <TabMenuItemBox>
              <Link key={index} to={tabMenuItem.to}>
                {tabMenuItem.text}
              </Link>
            </TabMenuItemBox>
          ))}
        </TabMenuBox>
      </TabMenuWrap>
    </MenuBox>
  );
};

export default Menu;
