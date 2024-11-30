import GameLocation from "./GameLocation";
import {
  GameDateSpan,
  GameDetailsBox,
  GameResultBox,
  GameScheduleBox,
  GameTeamDetailsBox,
  OpposingTeamBox,
  OpposingTeamImage,
  OpposingTeamScoreSpan,
  OpposingTeamSpan,
  OurTeamBox,
  OurTeamImage,
  OurTeamScoreSpan,
  OurTeamSpan,
  ScoreBox,
  VersusSpan,
} from "./GameScheduleStyles";
import teamlogo from "~/assets/images/homepage_logo_top.svg";

interface Props {
  date: string;
  time: string;
  location: string;
  opposingTeam: string;
  opposingTeamImage: string;
  score1: string;
  score2: string;
}

const GameSchedule = ({
  date,
  time,
  location,
  opposingTeam,
  opposingTeamImage,
  score1,
  score2,
}: Props) => {
  return (
    <GameScheduleBox>
      <GameDetailsBox>
        <GameDateSpan>
          {date} - {time}
        </GameDateSpan>
        <GameLocation location={location} />
      </GameDetailsBox>
      <GameTeamDetailsBox>
        <OurTeamBox>
          <OurTeamImage src={teamlogo} />
          <OurTeamSpan>JEJU DEERS</OurTeamSpan>
        </OurTeamBox>
        <VersusSpan>VS</VersusSpan>
        <OpposingTeamBox>
          <OpposingTeamSpan>{opposingTeam}</OpposingTeamSpan>
          <OpposingTeamImage src={opposingTeamImage} />
        </OpposingTeamBox>
      </GameTeamDetailsBox>
      <GameResultBox>
        <ScoreBox>
          <OurTeamScoreSpan>{score1}</OurTeamScoreSpan>
        </ScoreBox>
        <VersusSpan>VS</VersusSpan>
        <ScoreBox>
          <OpposingTeamScoreSpan>{score2}</OpposingTeamScoreSpan>
        </ScoreBox>
      </GameResultBox>
    </GameScheduleBox>
  );
};

export default GameSchedule;
