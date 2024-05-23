import Sidebar from "./sidebar/SideBar";
import MainBody from "./body/MainBody";
import { MainContentBox } from "./MainContentStyles";

const MainContent = () => {
  return (
    <MainContentBox>
      <Sidebar />
      <MainBody />
    </MainContentBox>
  );
};

export default MainContent;
