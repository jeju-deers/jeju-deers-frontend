import Heading from "~/components/atoms/club/Heading";
import { CoachListWrap, CoachPageLayout, StaffListWrap } from "./CoachPageStyles";
import helmet from "~/assets/images/helmet.svg";
import COACH from "~/constants/coachData";
import STAFF from "~/constants/staffData";
import CoachList from "~/components/atoms/club/CoachList";
import StaffList from "~/components/atoms/club/StaffList";

const Coach = () => {
  return (
    <CoachPageLayout>
      <Heading src={helmet} alt="helmet" text="코치" />
      <CoachListWrap>
        <CoachList coachlist={COACH} />
      </CoachListWrap>
      <Heading src={helmet} alt="helmet" text="스태프" />
      <StaffListWrap>
        <StaffList stafflist={STAFF} />
      </StaffListWrap>
    </CoachPageLayout>
  );
};

export default Coach;
