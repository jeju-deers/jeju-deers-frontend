import { useQuery } from "@tanstack/react-query";
import { GetUserInformationProps } from "~/api/types/users";
import { getUserInformation } from "~/api/users";

export const useGetUserInformation = (userId: string) => {
  const { data, isLoading, isError } = useQuery<GetUserInformationProps>({
    queryKey: ["userId", userId],
    queryFn: () => getUserInformation(userId),
  });
  return { userInformation: data, isLoading, isError };
};
