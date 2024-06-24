import Heading from "~/components/atoms/club/Heading";
import { CoachPageLayout } from "./CoachPageStyles";
import helmet from "~/assets/images/helmet.svg";

const Coach = () => {
  return (
    <CoachPageLayout>
      <Heading src={helmet} alt="helmet" text="코치" />
      <Heading src={helmet} alt="helmet" text="스태프" />
    </CoachPageLayout>
  );
};

export default Coach;
