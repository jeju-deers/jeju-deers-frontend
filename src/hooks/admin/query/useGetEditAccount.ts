import { useQuery } from "@tanstack/react-query";
import { getEditAccount } from "~/api/admin";

const useGetEditAccount = (userId: string) => {
  console.log("useGetEditAccount");
  const { data, isLoading, isSuccess, isError, error } = useQuery({
    queryKey: ["adminEditAccount", userId],
    queryFn: async () => {
      console.log(userId);

      const response = await getEditAccount(userId);

      return response.data;
    },
  });

  return { editAccountData: data, isLoading, isSuccess, isError, error };
};

export default useGetEditAccount;
