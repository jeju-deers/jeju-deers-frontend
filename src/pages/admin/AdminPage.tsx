import SideBar from "~/components/atoms/admin/SideBar";
import { ContentBox, ContentBoxWrap, PrimaryContentBox, WholePageBox } from "./AdminPageStyles";
import Header from "~/components/atoms/admin/Header";

const AdminPage = () => {
  return (
    <WholePageBox>
      <SideBar />
      <PrimaryContentBox>
        <Header />
        <ContentBoxWrap>
          <ContentBox>content</ContentBox>
        </ContentBoxWrap>
      </PrimaryContentBox>
    </WholePageBox>
  );
};

export default AdminPage;
