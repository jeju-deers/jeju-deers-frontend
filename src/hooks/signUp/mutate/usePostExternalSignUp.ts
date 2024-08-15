import { useMutation } from "@tanstack/react-query";
import { postSignUp } from "~/api/account";

interface Props {
  userType: "external" | "player" | "coach";
  userId: string;
  password: string;
  passwordConfirm: string;
  name: string;
  nickname?: string;
  email: string;
}

const usePostExternalSignUp = () => {
  const mutation = useMutation({
    mutationFn: ({ userType, userId, password, passwordConfirm, name, nickname, email }: Props) =>
      postSignUp({ userType, userId, password, passwordConfirm, name, nickname, email }),
    onSuccess: (data) => {
      console.log(`external 회원가입 성공, data: ${data}`);
    },
    onError: (error) => console.log(`external 회원가입 실패, error: ${error}`),
  });
  return mutation;
};

export default usePostExternalSignUp;