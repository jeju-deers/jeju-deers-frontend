import Sidebar from "../components/organism/main/SideBar";
import Main from "../components/organism/main/Main";
import { MainPageBox } from "./HomePageStyles";

const MainPage = () => {
  return (
    <MainPageBox>
      <Sidebar />
      <Main />
    </MainPageBox>
  );
};

export default MainPage;
