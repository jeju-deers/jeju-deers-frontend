import { useQuery } from "@tanstack/react-query";
import { getSingleBoard } from "~/api/board";

const useGetSingleBoard = (singleBoardId: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ["singleBoardId", singleBoardId],
    queryFn: () => getSingleBoard(singleBoardId),
  });

  return { singleBoard: data, isLoading };
};

export default useGetSingleBoard;
