import { useMutation } from "@tanstack/react-query";
import { deleteUserList } from "~/api/admin";

const useDeleteUserList = () => {
  const mutation = useMutation({
    mutationFn: (ids: string[]) => deleteUserList(ids),
  });
  return mutation;
};

export default useDeleteUserList;
