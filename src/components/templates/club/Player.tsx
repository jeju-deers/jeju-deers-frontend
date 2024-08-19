import Heading from "~/components/atoms/club/Heading";
import PlayerList from "~/components/atoms/club/roster/PlayerList";
import helmet from "~/assets/images/helmet.svg";
import { PlayerListWrap, PlayerLayout } from "./PlayerStyles";

const Player = () => {
  return (
    <PlayerLayout>
      <Heading src={helmet} alt="helmet" text="선수 명단" />
      <PlayerListWrap>
        <PlayerList />
      </PlayerListWrap>
    </PlayerLayout>
  );
};

export default Player;
