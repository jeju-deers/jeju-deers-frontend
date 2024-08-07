import { useQuery } from "@tanstack/react-query";
import axios from "axios";

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

const fetchNewsData = async () => {
  const response = await axios.get("https://jeju-deers-backend.fly.dev/boards");
  return response.data.filter((board: Board) => board.type === "news");
};

export const useNewsData = () => {
  return useQuery({ queryKey: ["newsData"], queryFn: fetchNewsData });
};
