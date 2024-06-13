import Header from "../header/Header";
import { MainBodyBox } from "./MainBodyStyles";
import MainBodyContent from "~/components/molecules/main/body/MainBodyContent";

const MainBody = () => (
  <MainBodyBox>
    <Header />
    <MainBodyContent />
  </MainBodyBox>
);

export default MainBody;
