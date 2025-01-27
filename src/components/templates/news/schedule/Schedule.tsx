import { useEffect, useState } from "react";
import GameSchedule from "~/components/atoms/news/schedule/GameSchedule";
import { ScheduleLayout, AddButton } from "./ScheduleStyles";
import teamlogo from "~/assets/images/homepage_logo_top.svg";
import { GameScheduleData } from "~/api/types/schedule";
import { useGetSchedules } from "~/hooks/schedule/query/useGetSchedules";
import usePostSchedule from "~/hooks/schedule/mutate/usePostSchedule";

const Schedule = () => {
  const { data: games, isLoading, error } = useGetSchedules();
  const { mutate: postSchedule } = usePostSchedule();
  const [formatGames, setFormatGames] = useState<GameScheduleData[]>([]);

  // Retrieve the token from localStorage
  const token = localStorage.getItem("token");

  const addGame = () => {
    const newGame: GameScheduleData = {
      id: Date.now().toString(),
      date: "",
      location: "",
      homeTeam: "",
      homeScore: "",
      awayTeam: "",
      awayScore: "",
      isEditing: true,
      awayTeamImage: teamlogo,
    };
    setFormatGames((prevGames) => [...prevGames, newGame]);
  };

  const updateGame = (id: string, updatedData: Partial<GameScheduleData>) => {
    setFormatGames((prevGames) =>
      prevGames.map((game) =>
        game.id === id ? { ...game, ...updatedData, isEditing: false } : game,
      ),
    );
  };

  const editGame = (id: string) => {
    setFormatGames((prevGames) =>
      prevGames.map((game) => (game.id === id ? { ...game, isEditing: true } : game)),
    );
  };

  const deleteGame = (id: string) => {
    setFormatGames((prevGames) => prevGames.filter((game) => game.id !== id));
  };

  const saveGame = (id: string, updatedData: Partial<GameScheduleData>) => {
    const gameToSave = formatGames.find((game) => game.id === id);
    if (gameToSave && token) {
      postSchedule({ ...gameToSave, ...updatedData, token }); // Pass token from localStorage
      updateGame(id, updatedData);
    }
  };

  return (
    <ScheduleLayout>
      {isLoading ? (
        <div>로딩 중...</div>
      ) : error ? (
        <div>에러가 발생했습니다. 다시 시도해주세요.</div>
      ) : games.length === 0 && formatGames.length === 0 ? (
        <div>일정이 없습니다. 추가해주세요.</div>
      ) : (
        <>
          {[...games, ...formatGames].map((game) => (
            <GameSchedule
              key={game.id}
              date={game.date}
              location={game.location}
              homeTeam={game.homeTeam}
              awayTeam={game.awayTeam}
              homeScore={game.homeScore}
              awayScore={game.awayScore}
              awayTeamImage={game.awayTeamImage}
              isEditing={game.isEditing}
              onSave={(updatedData) => saveGame(game.id, updatedData)}
              onEdit={() => editGame(game.id)}
              onDelete={() => deleteGame(game.id)}
            />
          ))}
        </>
      )}

      <AddButton onClick={addGame}>추가하기</AddButton>
    </ScheduleLayout>
  );
};

export default Schedule;
