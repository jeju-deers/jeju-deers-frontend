import PrimaryHeader from "~/components/molecules/signUp/header/PrimaryHeader";
import SubHeader from "~/components/molecules/signUp/header/SubHeader";
import { HeaderBox, PrimaryHeaderWrap } from "./HeaderStyles";

const Header = () => {
  return (
    <HeaderBox>
      <PrimaryHeaderWrap>
        <PrimaryHeader />
      </PrimaryHeaderWrap>
      <SubHeader />
    </HeaderBox>
  );
};

export default Header;
