import { useMutation } from "@tanstack/react-query";
import { deleteBoard } from "~/api/boards";

interface Props {
  id: string;
  token: string;
}

const useDeleteBoard = () => {
  const mutation = useMutation({
    mutationFn: ({ id, token }: Props) => {
      return deleteBoard(id, token);
    },
    onSuccess: () => {
      console.log("게시물이 삭제되었습니다.");
    },
    onError: (error: Error) => {
      console.error(`게시물 삭제에 실패했습니다: ${error}`);
    },
  });
  return mutation;
};

export default useDeleteBoard;
