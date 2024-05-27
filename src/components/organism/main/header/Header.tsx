import Accounts from "~/components/molecules/main/header/Accounts";
import Menus from "~/components/molecules/main/header/Menus";
import { HeaderBox } from "./HeaderStyles";

const Header = () => (
  <HeaderBox>
    <Menus />
    <Accounts />
  </HeaderBox>
);

export default Header;
