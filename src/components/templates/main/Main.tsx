import Footer from "~/components/organisms/main/footer/Footer";
import Sidebar from "~/components/organisms/main/sidebar/SideBar";
import MainBody from "~/components/organisms/main/body/MainBody";
import { MainLayout, MainContentWrap } from "./MainStyles";

const Main = () => {
  return (
    <MainLayout>
      <MainContentWrap>
        <Sidebar />
        <MainBody />
      </MainContentWrap>
      <Footer />
    </MainLayout>
  );
};

export default Main;
