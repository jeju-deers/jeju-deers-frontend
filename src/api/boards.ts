import { instance } from "~/api";

interface Board {
  id: number;
  type: string;
  title: string;
  content: string;
  owner: string;
  images: [];
  videos: [];
  createdAt: string;
  updatedAt: string;
  views: number;
}

export const GetBoards = async (type: string) => {
  const { data } = await instance.get("/boards");
  console.log(data);
  return data.filter((board: Board) => board.type === type);
};
