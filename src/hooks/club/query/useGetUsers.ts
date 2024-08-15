import { useQuery } from "@tanstack/react-query";
import { GetUsers } from "~/api/users";

export const useGetUsers = (usertype: string) => {
  return useQuery({ queryKey: ["usersData", usertype], queryFn: () => GetUsers(usertype) });
};
