import MainBody from "../components/organism/main/MainBody";
import Sidebar from "../components/organism/main/SideBar";
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
