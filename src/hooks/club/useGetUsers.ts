import { useQuery } from "@tanstack/react-query";
import { GetUsers } from "~/api/users";

export const useGetUsers = (usertype: string) => {
  return useQuery({ queryKey: ["playerData", usertype], queryFn: () => GetUsers(usertype) });
};
