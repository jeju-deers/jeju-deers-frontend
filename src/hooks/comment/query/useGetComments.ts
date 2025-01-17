import { useQuery } from "@tanstack/react-query";
import { getComments } from "~/api/comment";

interface Props {
  postId: string;
  token?: string;
}

const useGetComments = ({ postId, token }: Props) => {
  const { data, isLoading, isError, error, isSuccess } = useQuery({
    queryKey: ["comments", postId],
    queryFn: () => getComments({ postId, token }),
  });

  return { data, isLoading, isError, error, isSuccess };
};

export default useGetComments;
