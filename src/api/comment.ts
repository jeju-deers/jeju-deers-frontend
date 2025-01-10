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
};
