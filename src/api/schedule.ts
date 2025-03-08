import { instance } from "~/api";
import { GameScheduleData } from "./types/schedule";

export const getSchedules = async () => {
  const { data } = await instance.get("/game-schedules");
  return data;
};

export const postSchedule = async (schedule: GameScheduleData) => {
  const token = localStorage.getItem("token") || "";
  const { data } = await instance.post("/game-schedules", schedule, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const updateSchedule = async (schedule: GameScheduleData) => {
  const token = localStorage.getItem("token") || "";
  const { data } = await instance.put(`/game-schedules/${schedule.id}`, schedule, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const deleteSchedule = async (id: string) => {
  const token = localStorage.getItem("token") || "";
  await instance.delete(`/game-schedules/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
