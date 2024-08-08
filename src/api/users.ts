import { instance } from "~/api";

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

export const GetUsers = async (usertype: string) => {
  const response = await instance.get("/users");
  console.log(response.data);
  return response.data.filter((player: User) => player.userType === usertype);
};
