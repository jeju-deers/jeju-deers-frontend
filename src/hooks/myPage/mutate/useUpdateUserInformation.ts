import { useMutation } from "@tanstack/react-query";
import { GetUserInformationProps } from "~/api/types/users";
import { putUserInformation } from "~/api/users";

const useUpdateUserInformation = (userId: string, token: string | null) => {
  const objectInformation = {
    userId: userId,
    token: token,
  };

  // TODO: [2024-08-28] 요청 데이터 및 응답 error 확인가능하지만, api 요청 시 500 에러로 확인 필요
  const mutation = useMutation({
    mutationFn: ({ userInformation }: GetUserInformationProps) => {
      return putUserInformation(objectInformation, {
        userInformation,
      });
    },
    onSuccess: () => {},
    onError: () => {
      console.log(Error);
    },
  });

  return mutation;
};

export default useUpdateUserInformation;
