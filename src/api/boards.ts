import { instance } from "~/api";
import { Board } from "./types/board";

export const GetBoards = async (type: string) => {
  const { data } = await instance.get("/boards");
  return data
    .filter((board: Board) => board.type === type)
    .sort(
      (a: Board, b: Board) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    );
};

export const DeleteBoard = async (id: string, token: string | null) => {
  return await instance.delete(`/boards/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

interface UpdateBoardProps {
  id: string;
  title: string;
  content: string;
  type: string;
  owner: string;
  token: string;
}

export const UpdateBoard = async ({ id, title, content, type, token, owner }: UpdateBoardProps) => {
  const response = await instance.put(
    `/boards/${id}`,
    { title, content, type, owner },
    { headers: { Authorization: `Bearer ${token}` } },
  );
  console.log(title);
  console.log(owner);
  console.log(type);
  console.log(content);
  return response.data;
};

interface GetBoardDetailsProps {
  id: number;
  token: string;
}

export const getBoardDetails = async ({ id, token }: GetBoardDetailsProps) => {
  try {
    const response = await instance.get(`/boards/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching board details: ${error}`);
    throw error;
  }
};
