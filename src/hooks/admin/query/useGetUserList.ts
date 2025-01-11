import { useQuery } from "@tanstack/react-query";
import { getUserList } from "~/api/admin";

const useGetUserList = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["userList"],
    queryFn: async () => {
      const response = await getUserList();
      return response.data;
    },
  });

  return { userListData: data, isLoading };
};

export default useGetUserList;
