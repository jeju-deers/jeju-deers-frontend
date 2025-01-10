import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getComments } from "~/api/comment";

interface Props {
  postId: string;
  token?: string;
}

const useGetComments = ({ postId, token }: Props) => {
  const queryClient = useQueryClient();

  const { data, isLoading, isError, error, isSuccess } = useQuery({
    queryKey: ["comments", postId],
    queryFn: () => getComments({ postId, token }),
  });
  if (isSuccess) {
    queryClient.invalidateQueries({ queryKey: [postId] });
  }

  return { data, isLoading, isError, error, isSuccess };
};

export default useGetComments;
