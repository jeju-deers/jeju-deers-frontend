import { TabMenuItemBox } from "./TabMenuItemStyles";
import { NavLink } from "react-router-dom";

interface Props {
  to: string;
  text: string;
}

const TabMenuItem = ({ to, text }: Props) => {
  return (
    <TabMenuItemBox>
      <NavLink to={to}>{text}</NavLink>
    </TabMenuItemBox>
  );
};

export default TabMenuItem;
