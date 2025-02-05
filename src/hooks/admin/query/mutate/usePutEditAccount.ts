import { useMutation, useQueryClient } from "@tanstack/react-query";
import { putEditAccount } from "~/api/admin";
import { PutEditAccount } from "~/api/types/admin";

const usePutEditAccount = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({
      userId,
      belong,
      role,
      permission,
      name,
      nickname,
      email,
      school,
      studentId,
      positions,
    }: PutEditAccount) =>
      putEditAccount({
        userId,
        belong,
        role,
        permission,
        name,
        nickname,
        email,
        school,
        studentId,
        positions,
      }),
    onSuccess: (_, { userId }) => {
      console.log("사용자 정보를 성공적으로 수정하였습니다.");
      queryClient.invalidateQueries({ queryKey: ["adminEditAccount", userId] });
      alert("사용자 정보 수정이 완료되었습니다.");
    },
    onError: (error) => {
      console.log("사용자 정보 수정 실패: ", error);
    },
  });
  return mutation;
};

export default usePutEditAccount;
