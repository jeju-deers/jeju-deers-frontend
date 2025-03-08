import { useState } from "react";
import GameSchedule from "~/components/atoms/news/schedule/GameSchedule";
import { ScheduleLayout, AddButton } from "./ScheduleStyles";
import teamlogo from "~/assets/images/homepage_logo_top.svg";

interface GameScheduleData {
  id: number;
  datetime: string;
  location: string;
  opposingTeam: string;
  opposingTeamImage: string;
  score1: string;
  score2: string;
  isEditing: boolean;
}

const Schedule = () => {
  const [games, setGames] = useState<GameScheduleData[]>([
    {
      id: 1,
      datetime: "2024-07-25 13:00",
      location: "제주대학교 대운동장",
      opposingTeam: "HYU LIONS",
      opposingTeamImage: teamlogo,
      score1: "0",
      score2: "0",
      isEditing: false,
    },
  ]);

  const addGame = () => {
    setGames((prevGames) => [
      ...prevGames,
      {
        id: Date.now(),
        datetime: "", // 기본값
        location: "", // 기본값
        opposingTeam: "", // 기본값
        opposingTeamImage: teamlogo,
        score1: "", // 기본값
        score2: "", // 기본값
        isEditing: true, // 추가 시 편집 상태로
      },
    ]);
  };

  const updateGame = (id: number, updatedData: Partial<GameScheduleData>) => {
    setGames((prevGames) =>
      prevGames.map((game) =>
        game.id === id ? { ...game, ...updatedData, isEditing: false } : game,
      ),
    );
  };

  const editGame = (id: number) => {
    setGames((prevGames) =>
      prevGames.map((game) => (game.id === id ? { ...game, isEditing: true } : game)),
    );
  };

  const deleteGame = (id: number) => {
    setGames((prevGames) => prevGames.filter((game) => game.id !== id));
  };

  return (
    <ScheduleLayout>
      {games.map((game) => (
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
      ))}
      <AddButton onClick={addGame}>추가하기</AddButton>
    </ScheduleLayout>
  );
};

export default Schedule;
