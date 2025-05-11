import { useQuery } from "@tanstack/react-query";
import { getBoards } from "~/api/boards";

export const useGetBoards = (type: string) => {
  return useQuery({ queryKey: ["boardsData", type], queryFn: () => getBoards(type) });
};
