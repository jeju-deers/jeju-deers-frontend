import SideBar from "~/components/atoms/admin/SideBar";
import { ContentBox, HeaderBox, PrimaryContentBox, WholePageBox } from "./AdminPageStyles";

const AdminPage = () => {
  return (
    <WholePageBox>
      <SideBar />
      <PrimaryContentBox>
        <HeaderBox>header</HeaderBox>
        <ContentBox>content</ContentBox>
      </PrimaryContentBox>
    </WholePageBox>
  );
};

export default AdminPage;
