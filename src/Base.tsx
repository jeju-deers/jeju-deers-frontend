import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./components/organisms/main/sidebar/SideBar";
import Header from "./components/organisms/main/header/Header";
import Footer from "./components/organisms/main/footer/Footer";
import { OutletBox, ContentBox, HeaderBox, BaseLayout } from "./BaseStyles";
import Title from "./components/organisms/main/title/Title";
import TITLES from "./constants/TitleList";

const Base = () => {
  const location = useLocation();
  const pathParts = location.pathname.split("/").filter(Boolean);
  const titleEn = pathParts.length > 1 ? TITLES[pathParts[1]][0] : "";
  const titleKo = pathParts.length > 1 ? TITLES[pathParts[1]][1] : "";
  return (
    <BaseLayout>
      <Sidebar />
      <ContentBox>
        <HeaderBox>
          <Header />
          <Title entitle={titleEn} kotitle={titleKo} />
        </HeaderBox>
        <OutletBox>
          <Outlet />
        </OutletBox>
        <Footer />
      </ContentBox>
    </BaseLayout>
  );
};

export default Base;
