import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UpdateBoard } from "~/api/boards";

interface UpdateBoardProps {
  id: string;
  title: string;
  content: string;
  type: string;
  owner: string;
  token: string;
}
const useUpdateBoard = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({ id, title, content, type, owner, token }: UpdateBoardProps) => {
      return UpdateBoard({ id, title, content, type, owner, token });
    },
    onSuccess: () => {
      console.log("게시물이 성공적으로 수정되었습니다.");
      queryClient.invalidateQueries({ queryKey: ["boards"] });
      alert("게시물이 수정되었습니다.");
    },
    onError: (error) => {
      console.error("게시물 수정에 실패했습니다:", error);
    },
  });

  return mutation;
};

export default useUpdateBoard;
