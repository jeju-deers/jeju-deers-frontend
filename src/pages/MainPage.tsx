import MainBody from "~/components/organism/main/body/MainBody";
import Sidebar from "~/components/organism/main/sidebar/SideBar";
import { MainPageLayout } from "./MainPageStyles";

const MainPage = () => {
  return (
    <MainPageLayout>
      <Sidebar />
      <MainBody />
    </MainPageLayout>
  );
};

export default MainPage;
