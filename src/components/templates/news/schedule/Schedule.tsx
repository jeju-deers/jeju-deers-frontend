import { useEffect, useState } from "react";
import GameSchedule from "~/components/atoms/news/schedule/GameSchedule";
import { ScheduleLayout, AddButton } from "./ScheduleStyles";
import teamlogo from "~/assets/images/homepage_logo_top.svg";
import { GameScheduleData } from "~/api/types/schedule";
import { useGetSchedules } from "~/hooks/schedule/query/useGetSchedules";
import usePostSchedule from "~/hooks/schedule/mutate/usePostSchedule";
import useUpdateSchedule from "~/hooks/schedule/mutate/useUpdateSchedule";
import useDeleteSchedule from "~/hooks/schedule/mutate/useDeleteSchedule";

const Schedule = () => {
  const { data: games = [], isLoading, error } = useGetSchedules();
  const { mutate: postSchedule } = usePostSchedule();
  const { mutate: updateSchedule } = useUpdateSchedule();
  const { mutate: deleteSchedule } = useDeleteSchedule();

  const [formatGames, setFormatGames] = useState<GameScheduleData[]>([]);

  useEffect(() => {
    if (games.length) {
      const initializedGames = games.map((game: GameScheduleData) => ({
        ...game,
        isEditing: false, // isEditing을 기본 false로 설정
      }));
      setFormatGames(initializedGames);
    }
  }, [games]);

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
      prevGames.map((game) =>
        game.id === id ? { ...game, isEditing: true } : { ...game, isEditing: false },
      ),
    );
  };

  const deleteGame = (id: string) => {
    deleteSchedule(id);
    setFormatGames((prevGames) => prevGames.filter((game) => game.id !== id));
  };

  const saveGame = (id: string, updatedData: Partial<GameScheduleData>) => {
    const gameToSave = formatGames.find((game) => game.id === id);
    if (gameToSave) {
      const updatedSchedule = { ...gameToSave, ...updatedData, isEditing: false };
      if (gameToSave.date === "") {
        postSchedule(updatedSchedule);
        alert("경기일정이 추가되었습니다!");
      } else {
        updateSchedule(updatedSchedule);
        alert("경기일정이 수정되었습니다!");
      }
      updateGame(id, updatedData);
    }
  };

  return (
    <ScheduleLayout>
      {isLoading ? (
        <div>로딩 중...</div>
      ) : error ? (
        <div>에러가 발생했습니다. 다시 시도해주세요.</div>
      ) : !formatGames.length ? (
        <div>일정이 없습니다. 추가해주세요.</div>
      ) : (
        formatGames.map((game) => (
          <GameSchedule
            key={game.id}
            date={game.date}
            location={game.location}
            homeTeam={game.homeTeam}
            awayTeam={game.awayTeam}
            homeScore={game.homeScore}
            awayScore={game.awayScore}
            awayTeamImage={teamlogo}
            isEditing={game.isEditing}
            onSave={(updatedData) => saveGame(game.id, updatedData)}
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
