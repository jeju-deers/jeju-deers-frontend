import { NavLink } from "react-router-dom";
import { MenuBox } from "./MenuStyles";

interface Props {
  to: string;
  text: string;
}

const Menu = ({ to, text }: Props) => {
  return (
    <MenuBox>
      <NavLink to={to}>{text}</NavLink>
    </MenuBox>
  );
};

export default Menu;
