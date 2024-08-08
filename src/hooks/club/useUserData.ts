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

const fetchUserData = async (usertype: string) => {
  const response = await axios.get("https://jeju-deers-backend.fly.dev/users");
  return response.data.filter((player: User) => player.userType === usertype);
};

export const useUserData = (usertype: string) => {
  return useQuery({ queryKey: ["rosterData", usertype], queryFn: () => fetchUserData(usertype) });
};
