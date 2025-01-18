import { instance } from "~/api";

export const GetSchedules = async () => {
  const { data } = await instance.get("/game-schedules");
  return data;
};
