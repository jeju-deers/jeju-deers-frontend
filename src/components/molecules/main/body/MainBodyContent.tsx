import { MainBodyContentBox, TitleWrap } from "./MainBodyContentStyles";
import Title from "~/components/atoms/main/body/Title";
import Description from "~/components/atoms/main/body/Description";

const MainBodyContent = () => (
  <MainBodyContentBox>
    <TitleWrap>
      <Title />
    </TitleWrap>
    <Description />
  </MainBodyContentBox>
);

export default MainBodyContent;
