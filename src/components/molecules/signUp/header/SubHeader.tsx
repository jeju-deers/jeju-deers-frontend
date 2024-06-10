import SubTitle from "~/components/atoms/signUp/header/SubTitle";
import MainLogo from "~/components/atoms/signUp/header/MainLogo";
import { SubHeaderBox, SubHeaderWrap } from "./SubHeaderStyles";
import SeparatePartLine from "~/components/atoms/signUp/body/SeparatePartLine";

const SubHeader = () => {
  return (
    <SubHeaderBox>
      <SubHeaderWrap>
        <MainLogo />
        <SubTitle />
      </SubHeaderWrap>
      <SeparatePartLine />
    </SubHeaderBox>
  );
};

export default SubHeader;
