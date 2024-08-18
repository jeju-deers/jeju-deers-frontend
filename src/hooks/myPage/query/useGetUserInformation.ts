import { useQuery } from "@tanstack/react-query";
import { GetUserInformationProps } from "~/api/types/users";
import { getUserInformation } from "~/api/users";

export const useGetUserInformation = (userId: GetUserInformationProps) => {
  return useQuery({ queryKey: ["userId", userId], queryFn: () => getUserInformation(userId) });
};
