import Footer from "~/components/organisms/main/footer/Footer";
import MainContent from "~/components/organisms/main/MainContent";
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
