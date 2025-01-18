import { useEffect, useState } from "react";
import GameSchedule from "~/components/atoms/news/schedule/GameSchedule";
import { ScheduleLayout, AddButton } from "./ScheduleStyles";
import teamlogo from "~/assets/images/homepage_logo_top.svg";
import { GameScheduleData } from "~/api/types/schedule";
import { GetSchedules } from "~/api/schedule";

const Schedule = () => {
  const [games, setGames] = useState<GameScheduleData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSchedules = async () => {
      try {
        const data = await GetSchedules();
        setGames(data);
      } catch (err) {
        setError("일정 정보를 가져오는 데 실패했습니다.");
        console.dir(err);
      } finally {
        setLoading(false);
      }
    };

    fetchSchedules();
  }, []);

  const addGame = () => {};

  const updateGame = (id: number, updatedData: Partial<GameScheduleData>) => {};

  const editGame = (id: number) => {};

  const deleteGame = (id: number) => {};

  return (
    <ScheduleLayout>
      {loading ? (
        <div>로딩 중...</div>
      ) : error ? (
        <div>{error}</div>
      ) : games.length === 0 ? (
        <div>일정이 없습니다. 추가해주세요.</div>
      ) : (
        games.map((game) => (
          <GameSchedule
            key={game.id}
            datetime={game.datetime}
            location={game.location}
            opposingTeam={game.opposingTeam}
            opposingTeamImage={game.opposingTeamImage}
            score1={game.score1}
            score2={game.score2}
            isEditing={game.isEditing}
            onSave={(updatedData) => updateGame(game.id, updatedData)}
            onEdit={() => editGame(game.id)}
            onDelete={() => deleteGame(game.id)}
          />
        ))
      )}
      <AddButton onClick={addGame}>추가하기</AddButton>
    </ScheduleLayout>
  );
};

export default Schedule;
