import { instance } from ".";

export const getUserList = async () => {
  return await instance.get("/admin/dashboard");
};

export const deleteUserList = async (userIds: string[]) => {
  return await instance.delete("/admin/users", { data: { ids: userIds } });
};

export const getEditAccount = async (userId: string) => {
  return await instance.get(`/admin/users/${userId}`);
};
