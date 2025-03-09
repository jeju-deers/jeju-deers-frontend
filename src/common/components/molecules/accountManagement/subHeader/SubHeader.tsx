import MainLogo from "~/common/components/atom/accountManagement/subHeader/MainLogo";
import SubTitle from "~/common/components/atom/accountManagement/subHeader/SubTitle";
import { SubHeaderBox } from "./SubHeaderStyles";

interface Props {
  subTitle: string;
}
const SubHeader = ({ subTitle }: Props) => {
  return (
    <SubHeaderBox>
      <MainLogo />
      <SubTitle text={subTitle} />
    </SubHeaderBox>
  );
};

export default SubHeader;
