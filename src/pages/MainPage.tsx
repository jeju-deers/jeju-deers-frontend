import Sidebar from "../components/organism/main/SideBar";
import Main from "../components/organism/main/Main";
import { MainPageBox } from "./MainPageStyles";

const MainPageLayout = () => {
  return (
    <MainPageBox>
      <Sidebar />
      <Main />
    </MainPageBox>
  );
};

export default MainPageLayout;
