import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { postComment } from "~/api/comment";

interface PostCommentProps {
  postId: string;
  name: string;
  belong: string;
  content: string;
  token: string;
}

const usePostComment = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({ postId, name, belong, content, token }: PostCommentProps) =>
      postComment({ postId, name, belong, content, token }),
    onSuccess: (_, { postId }) => {
      console.log(`댓글 작성 성공`);
      queryClient.invalidateQueries({ queryKey: ["comments", postId] });
    },
    onError: (error: Error) => {
      console.log(`댓글 작성 실패, error: ${error}`);

      if (!axios.isAxiosError(error)) {
        return;
      }

      const statusCode = error.response?.status;

      if (statusCode === 403) {
        alert("페이지 권한이 없습니다. 로그인 후 이용해주세요.");
      }
    },
  });
  return mutation;
};
export default usePostComment;
