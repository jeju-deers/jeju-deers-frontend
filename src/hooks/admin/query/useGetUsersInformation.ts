import { useQuery } from "@tanstack/react-query";
import { getUsers } from "~/api/users";

const useGetUsersInformation = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["usersInformation"],
    queryFn: () => getUsers(),
  });

  return { usersInformation: data, isLoading };
};

export default useGetUsersInformation;
