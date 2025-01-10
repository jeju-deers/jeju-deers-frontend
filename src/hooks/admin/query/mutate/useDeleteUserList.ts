import { useMutation } from "@tanstack/react-query";
import { deleteUserList } from "~/api/admin";

const useDeleteUserList = () => {
  const mutation = useMutation({
    mutationFn: (ids: string[]) => deleteUserList(ids),
    onSuccess: () => {
      console.log("사용자가 성공적으로 삭제되었습니다.");
      alert("사용자가 성공적으로 삭제되었습니다.");
    },
    onError: (error) => {
      console.log("삭제 실패: ", error);
    },
  });
  return mutation;
};

export default useDeleteUserList;
