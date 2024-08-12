import { useQuery } from "@tanstack/react-query";
import { GetBoards } from "~/api/boards";

export const useGetBoards = (type: string) => {
  return useQuery({ queryKey: ["boardsData", type], queryFn: () => GetBoards(type) });
};
