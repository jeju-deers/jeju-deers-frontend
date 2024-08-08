import Heading from "~/components/atoms/club/Heading";
import PlayerList from "~/components/atoms/club/roster/PlayerList";
import helmet from "~/assets/images/helmet.svg";
import { PlayerListWrap, PlayerPageLayout } from "./PlayerPageStyles";

const PlayerPage = () => {
  return (
    <PlayerPageLayout>
      <Heading src={helmet} alt="helmet" text="선수 명단" />
      <PlayerListWrap>
        <PlayerList />
      </PlayerListWrap>
    </PlayerPageLayout>
  );
};

export default PlayerPage;
