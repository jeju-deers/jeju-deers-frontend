import SideBar from "~/components/atoms/adminEditAccount/SideBar";
import {
  ContentBox,
  ContentBoxWrap,
  PrimaryContentBox,
  SideBarWrap,
  SubHeaderWrap,
  WholePageBox,
} from "./AdminEditAccountStyles";
import SubHeader from "~/common/components/molecules/accountManagement/subHeader/SubHeader";
import Header from "~/components/atoms/adminEditAccount/Header";

interface Props {
  userId: string;
}

const AdminEditAccount = ({ userId }: Props) => {
  return (
    <WholePageBox>
      <SideBarWrap>
        <SideBar />
      </SideBarWrap>
      <PrimaryContentBox>
        <Header />
        <ContentBoxWrap>
          <ContentBox>
            <SubHeaderWrap>
              <SubHeader subTitle="정보수정" />
            </SubHeaderWrap>
            <>사용자 Id: {userId}</>
          </ContentBox>
        </ContentBoxWrap>
      </PrimaryContentBox>
    </WholePageBox>
  );
};

export default AdminEditAccount;
