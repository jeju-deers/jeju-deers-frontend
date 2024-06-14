import SubTitle from "~/components/atoms/signUp/header/SubTitle";
import MainLogo from "~/components/atoms/signUp/header/MainLogo";
import { SubHeaderBox } from "./SubHeaderStyles";

const SubHeader = () => {
  return (
    <SubHeaderBox>
      <MainLogo />
      <SubTitle />
    </SubHeaderBox>
  );
};

export default SubHeader;
