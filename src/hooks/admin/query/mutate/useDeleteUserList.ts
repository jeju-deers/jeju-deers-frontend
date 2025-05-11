import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUserList } from "~/api/admin";

const useDeleteUserList = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (userIds: string[]) => deleteUserList(userIds),
    onSuccess: () => {
      console.log("사용자가 성공적으로 삭제되었습니다.");
      alert("사용자가 성공적으로 삭제되었습니다.");
      queryClient.invalidateQueries({ queryKey: ["userList"] });
    },
    onError: (error) => {
      console.log("삭제 실패: ", error);
    },
  });
  return mutation;
};

export default useDeleteUserList;
