import Footer from "~/components/organism/main/footer/Footer";
import MainContent from "../components/organism/main/MainContent";
import { MainPageLayout } from "./MainPageStyles";

const MainPage = () => {
  return (
    <MainPageLayout>
      <MainContent />
      <Footer />
    </MainPageLayout>
  );
};

export default MainPage;
