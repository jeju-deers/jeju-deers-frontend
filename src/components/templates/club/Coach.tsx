import Heading from "~/components/atoms/club/Heading";
import { CoachLayout, CoachListWrap } from "./CoachStyles";
import helmet from "~/assets/images/helmet.svg";
import CoachList from "~/components/atoms/club/coach/CoachList";

const Coach = () => {
  return (
    <CoachLayout>
      <Heading src={helmet} alt="helmet" text="코치 및 스태프" />
      <CoachListWrap>
        <CoachList />
      </CoachListWrap>
    </CoachLayout>
  );
};

export default Coach;
