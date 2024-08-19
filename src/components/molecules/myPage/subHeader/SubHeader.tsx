import MainLogo from "~/components/atoms/myPage/subHeader/MainLogo";
import { SubHeaderBox } from "./SubHeaderStyles";
import SubTitle from "~/components/atoms/myPage/subHeader/SubTitle";

const SubHeader = () => {
  return (
    <SubHeaderBox>
      <MainLogo />
      <SubTitle text="기본 정보 변경하기" />
    </SubHeaderBox>
  );
};

export default SubHeader;
