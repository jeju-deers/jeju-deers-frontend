import tw from "twin.macro";
import styled from "styled-components";

import { Sidebar } from "./components/molecules/sidebar/SideBar";

const MainOageContainer = styled.div`
  ${tw`
    flex
    flex-col
    bg-cover
    bg-no-repeat
    w-screen
  `}
`;

const HomePageContainer = styled.div`
  ${tw`
    flex 
    h-screen
  `}
`;

const MainPage = () => <MainOageContainer></MainOageContainer>;

const HomePage = () => {
  return (
    <HomePageContainer>
      <Sidebar />
      <MainPage />
    </HomePageContainer>
  );
};

export default HomePage;
