import { useMutation } from "@tanstack/react-query";
import { postComment } from "~/api/comment";

interface PostCommentProps {
  postId: string;
  name: string;
  belong?: string;
  content: string;
  token: string;
}

const usePostComment = () => {
  const mutation = useMutation({
    mutationFn: ({ postId, name, belong, content, token }: PostCommentProps) =>
      postComment({ postId, name, belong, content, token }),
    onSuccess: () => {
      console.log(`댓글 작성 성공`);
    },
    onError: (error) => console.log(`댓글 작성 실패, error: ${error}`),
  });
  return mutation;
};
export default usePostComment;
