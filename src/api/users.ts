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
  const { data } = await instance.get("/users");
  return data.filter((users: User) => users.userType === usertype);
};

export const getUserInformation = async (userId: string) => {
  const token = localStorage.getItem("token");

  const { data } = await instance.get(`/users/${userId}`, {
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
  });

  return data;
};
