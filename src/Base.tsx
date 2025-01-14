import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./components/organisms/main/sidebar/SideBar";
import Header from "./components/organisms/main/header/Header";
import Footer from "./components/organisms/main/footer/Footer";
import { OutletBox, ContentBox, HeaderBox, BaseLayout, BaseBox } from "./BaseStyles";
import Title from "./components/organisms/main/title/Title";
import TITLES from "./constants/TitleList";

const Base = () => {
  const location = useLocation();
  const pathParts = location.pathname.split("/").filter(Boolean);
  let currentPathKey = "";

  if (pathParts.length === 1) {
    currentPathKey = pathParts[0];
  } else if (pathParts.length >= 2) {
    currentPathKey = pathParts[1];
  }

  const titleEnglish = currentPathKey && TITLES[currentPathKey] ? TITLES[currentPathKey][0] : "";
  const titleKorean = currentPathKey && TITLES[currentPathKey] ? TITLES[currentPathKey][1] : "";
  const isRootPath = pathParts.length === 0;

  return (
    <BaseLayout>
      <BaseBox isRootPath={isRootPath}>
        <Sidebar />
        <ContentBox isRootPath={isRootPath}>
          {isRootPath ? (
            <Header />
          ) : (
            <HeaderBox>
              <Header />
              <Title titleEnglish={titleEnglish} titleKorean={titleKorean} />
            </HeaderBox>
          )}
          <OutletBox>
            <Outlet />
          </OutletBox>
        </ContentBox>
      </BaseBox>
      <Footer />
    </BaseLayout>
  );
};

export default Base;
