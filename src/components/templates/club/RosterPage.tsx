import Heading from "~/components/atoms/club/Heading";
import { RosterPageLayout } from "./RosterPageStyles";
import helmet from "~/assets/images/helmet.svg";

const Roster = () => {
  return (
    <RosterPageLayout>
      <Heading src={helmet} alt="helmet" text="선수 명단" />
    </RosterPageLayout>
  );
};

export default Roster;
