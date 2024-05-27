import Accounts from "~/components/molecules/main/header/Accounts";
import Menus from "~/components/molecules/main/header/Menus";
import { HeaderContainer } from "./HeaderStyles";

const Header = () => (
  <HeaderContainer>
    <Menus />
    <Accounts />
  </HeaderContainer>
);

export default Header;
