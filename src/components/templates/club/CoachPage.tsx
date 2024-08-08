import Heading from "~/components/atoms/club/Heading";
import { CoachListWrap, CoachPageLayout } from "./CoachPageStyles";
import helmet from "~/assets/images/helmet.svg";
import CoachList from "~/components/atoms/club/coach/CoachList";

const Coach = () => {
  return (
    <CoachPageLayout>
      <Heading src={helmet} alt="helmet" text="코치 및 스태프" />
      <CoachListWrap>
        <CoachList />
      </CoachListWrap>
    </CoachPageLayout>
  );
};

export default Coach;
