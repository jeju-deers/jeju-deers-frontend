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
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return data;
};
