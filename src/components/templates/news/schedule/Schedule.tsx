import GameSchedule from "~/components/atoms/news/schedule/GameSchedule";
import { ScheduleLayout } from "./ScheduleStyles";
import teamlogo from "~/assets/images/homepage_logo_top.svg";

const Schedule = () => {
  return (
    <ScheduleLayout>
      <GameSchedule
        date="2024/07/25"
        time="1:00 PM"
        location="제주대학교 대운동장"
        opposingTeam="HYU LIONS"
        opposingTeamImage={teamlogo}
        score1="0"
        score2="0"
      />
    </ScheduleLayout>
  );
};

export default Schedule;
