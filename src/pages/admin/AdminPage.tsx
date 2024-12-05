import SideBar from "~/components/atoms/admin/SideBar";
import { ContentBox, PrimaryContentBox, WholePageBox } from "./AdminPageStyles";
import Header from "~/components/atoms/admin/Header";

const AdminPage = () => {
  return (
    <WholePageBox>
      <SideBar />
      <PrimaryContentBox>
        <Header />
        <ContentBox>content</ContentBox>
      </PrimaryContentBox>
    </WholePageBox>
  );
};

export default AdminPage;
