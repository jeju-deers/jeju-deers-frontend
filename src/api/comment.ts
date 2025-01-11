import { instance } from ".";

interface GetCommentsProps {
  postId: string;
  token?: string;
}

export const getComments = async ({ postId, token }: GetCommentsProps) => {
  return await instance.get(`/comments/${postId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

interface PostCommentProps {
  postId: string;
  name: string;
  belong?: string;
  content: string;
  token: string;
}

// TODO: [2025-01-11] 현재 500에러를 반환합니다. 백엔드에서 확인 후 재확인이 필요합니다.
export const postComment = async ({ postId, name, belong, content, token }: PostCommentProps) => {
  const { data } = await instance.post(
    `/comments/${postId}`,
    { name, belong, content },
    {
      headers: { Authorization: `Bearer ${token}` },
    },
  );
  return data;
};
