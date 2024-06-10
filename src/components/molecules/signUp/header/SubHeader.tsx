import SubTitle from "~/components/atoms/signUp/header/SubTitle";
import MainLogo from "~/components/atoms/signUp/header/MainLogo";
import { SubHeaderBox, SubHeaderWrap } from "./SubHeaderStyles";
import SeparateContentLine from "~/components/atoms/signUp/body/SeparateContentLine";

const SubHeader = () => {
  return (
    <SubHeaderBox>
      <SubHeaderWrap>
        <MainLogo />
        <SubTitle />
      </SubHeaderWrap>
      <SeparateContentLine />
    </SubHeaderBox>
  );
};

export default SubHeader;
