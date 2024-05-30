import Footer from "~/components/organisms/main/footer/Footer";
import MainContent from "~/components/organisms/main/MainContent";
import { MainLayout } from "./MainPageStyles";

const Main = () => {
  return (
    <MainLayout>
      <MainContent />
      <Footer />
    </MainLayout>
  );
};

export default Main;
