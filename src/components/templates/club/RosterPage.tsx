import Heading from "~/components/atoms/club/Heading";
import RosterList from "~/components/atoms/club/roster/RosterList";
import { RosterListWrap, RosterPageLayout } from "./RosterPageStyles";
import helmet from "~/assets/images/helmet.svg";

const RosterPage = () => {
  return (
    <RosterPageLayout>
      <Heading src={helmet} alt="helmet" text="선수 명단" />
      <RosterListWrap>
        <RosterList />
      </RosterListWrap>
    </RosterPageLayout>
  );
};

export default RosterPage;
