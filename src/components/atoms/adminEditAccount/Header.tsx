import { HeaderBox, HeaderImage, HeaderTextBox } from "./HeaderStyles";
import helmet from "~/assets/images/helmet.svg";

const Header = () => {
  return (
    <HeaderBox>
      <HeaderTextBox>관리자 페이지</HeaderTextBox>
      <HeaderImage src={helmet} />
    </HeaderBox>
  );
};

export default Header;
