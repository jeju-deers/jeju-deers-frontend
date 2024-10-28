import { instance } from "~/api";
import { Board } from "./types/board";

export const GetBoards = async (type: string) => {
  const { data } = await instance.get("/boards");
  return data.filter((board: Board) => board.type === type);
};
