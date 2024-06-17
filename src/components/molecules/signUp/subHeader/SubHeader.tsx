import SubTitle from "~/components/atoms/signUp/subHeader/SubTitle";
import MainLogo from "~/components/atoms/signUp/subHeader/MainLogo";
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
