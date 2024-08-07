import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface User {
  userId: number;
  userType: "external" | "player" | "coach";
  name: string;
  backNumber: number;
  positions: string;
  birth: string;
  belong: string;
  school: string;
  studentId: number;
}

const fetchRosterData = async () => {
  const response = await axios.get("https://jeju-deers-backend.fly.dev/users");
  return response.data.filter((player: User) => player.userType === "player");
};

export const useRosterData = () => {
  return useQuery({ queryKey: ["rosterData"], queryFn: fetchRosterData });
};

const fetchCoachData = async () => {
  const response = await axios.get("https://jeju-deers-backend.fly.dev/users");
  return response.data.filter((player: User) => player.userType === "coach");
};

export const useCoachData = () => {
  return useQuery({ queryKey: ["rosterData"], queryFn: fetchCoachData });
};
