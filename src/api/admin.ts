import { instance } from ".";

export const getUserList = async () => {
  return await instance.get("/admin/dashboard");
};
