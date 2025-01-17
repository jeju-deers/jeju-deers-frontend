import { instance } from ".";

export const getUserList = async () => {
  return await instance.get("/admin/dashboard");
};

export const deleteUserList = async (ids: string[]) => {
  return await instance.delete("/admin/users", { data: { ids } });
};
