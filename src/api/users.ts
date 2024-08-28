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

export const getUserInformation = async (objectInformation: {
  userId: string;
  token: string | null;
}) => {
  const { data } = await instance.get(`/users/${objectInformation.userId}`, {
    headers: {
      Authorization: objectInformation.token ? `Bearer ${objectInformation.token}` : "",
    },
  });

  return data;
};
