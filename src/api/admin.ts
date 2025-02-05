import { instance } from ".";
import { PutEditAccount } from "./types/admin";

export const getUserList = async () => {
  return await instance.get("/admin/dashboard");
};

export const deleteUserList = async (ids: string[]) => {
  return await instance.delete("/admin/users", { data: { ids } });
};

export const getEditAccount = async (userId: string) => {
  return await instance.get(`/admin/users/${userId}`);
};

export const putEditAccount = async ({
  userId,
  belong,
  role,
  permission,
  name,
  nickname,
  email,
  school,
  studentId,
  positions,
}: PutEditAccount) => {
  return await instance.put(`/admin/users/${userId}`, {
    belong,
    role,
    permission,
    name,
    nickname,
    email,
    school,
    studentId,
    positions,
  });
};
