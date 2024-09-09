import { useQuery } from "@tanstack/react-query";
import { getUserInformation } from "~/api/users";

const useGetUserInformation = (userId: string | null, token: string | null) => {
  const objectInformation = {
    userId: userId,
    token: token,
  };

  const { data, isLoading } = useQuery({
    queryKey: ["userInformation", objectInformation],
    queryFn: () => getUserInformation(objectInformation),
  });

  return { userInformation: data, isLoading };
};

export default useGetUserInformation;
