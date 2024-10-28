import { instance } from ".";

export const getSingleBoard = async (singleBoardId: string) => {
  const { data } = await instance.get(`/boards/${singleBoardId}`);
  return data;
};
