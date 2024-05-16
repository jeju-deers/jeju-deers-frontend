import Sidebar from "../components/organism/main/SideBar";
import Main from "../components/organism/main/Main";
import { HomePageContainer } from "./HomePageStyles";

const HomePage = () => {
  return (
    <HomePageContainer>
      <Sidebar />
      <Main />
    </HomePageContainer>
  );
};

export default HomePage;
