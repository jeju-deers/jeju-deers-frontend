import { instance } from "~/api";

export const getSchedules = async () => {
  const { data } = await instance.get("/game-schedules");
  return data;
};

interface GameScheduleProps {
  token: string;
  id: string;
  date: string;
  location: string;
  homeTeam: string;
  homeScore: string;
  awayTeam: string;
  awayScore: string;
  isEditing: boolean;
}

export const postSchedule = async ({
  token,
  id,
  date: datetime,
  location,
  homeTeam,
  homeScore,
  awayTeam,
  awayScore,
  isEditing,
}: GameScheduleProps) => {
  const { data } = await instance.post(
    "/game-schedules",
    {
      token,
      id,
      date: datetime,
      location,
      homeTeam,
      homeScore,
      awayTeam,
      awayScore,
      isEditing,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return data;
};
