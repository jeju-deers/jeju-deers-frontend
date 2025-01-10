import { useQuery } from "@tanstack/react-query";
import { getComments } from "~/api/comment";

interface Props {
  postId: string;
  token?: string;
}

const useGetComments = ({ postId, token }: Props) => {
  return useQuery({
    queryKey: ["comments", postId],
    queryFn: () => getComments({ postId, token }),
  });
};

export default useGetComments;
