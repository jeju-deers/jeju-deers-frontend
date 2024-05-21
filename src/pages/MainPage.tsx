import Sidebar from "../components/organism/main/SideBar";
import Main from "../components/organism/main/Main";
import { MainPageLayout } from "./MainPageStyles";

const MainPage = () => {
  return (
    <MainPageLayout>
      <Sidebar />
      <Main />
    </MainPageLayout>
  );
};

export default MainPage;
