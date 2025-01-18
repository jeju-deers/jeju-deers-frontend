import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
// import { GetUserInformationProps } from "~/api/types/users";
import { putUserInformation } from "~/api/users";

const useUpdateUserInformation = (userId: string | null, token: string | null) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const objectInformation = {
    userId: userId,
    token: token,
  };

  const mutation = useMutation({
    mutationFn: (userInformation: any) => {
      return putUserInformation(objectInformation, userInformation);
    },
    onSuccess: () => {
      console.log(`회원정보 수정 성공`);
      queryClient.invalidateQueries({ queryKey: ["userInformation"] });
      alert("회원정보가 수정되었습니다.");
      navigate("/");
    },
    onError: (error) => {
      console.log(`회원정보 수정 실패, error: ${error}`);
    },
  });

  return mutation;
};

export default useUpdateUserInformation;
