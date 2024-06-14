import { Outlet } from "react-router-dom";
import Sidebar from "./components/organisms/main/sidebar/SideBar";
import Header from "./components/organisms/main/header/Header";
import Footer from "./components/organisms/main/footer/Footer";
import { OutletBox, ContentBox, BaseMainLayout, BaseMainBox } from "./BaseMainStyles";

const BaseMain = () => {
  return (
    <BaseMainLayout>
      <BaseMainBox>
        <Sidebar />
        <ContentBox>
          <Header />
          <OutletBox>
            <Outlet />
          </OutletBox>
        </ContentBox>
      </BaseMainBox>
      <Footer />
    </BaseMainLayout>
  );
};

export default BaseMain;
