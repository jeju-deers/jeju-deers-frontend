import { useMutation } from "@tanstack/react-query";
import { postSignUp } from "~/api/user";

interface Params {
  // userType: "external" | "player" | "coach";
  userType: string;
  userId: string;
  password: string;
  passwordConfirm: string;
  name: string;
  nickname?: string;
  email: string;
}

const usePostExternalSignUp = () => {
  const mutation = useMutation({
    mutationFn: ({ userType, userId, password, passwordConfirm, name, nickname, email }: Params) =>
      postSignUp({ userType, userId, password, passwordConfirm, name, nickname, email }),
    onSuccess: (data) => {
      console.log(`external 회원가입 성공, data: ${data}`);
    },
    onError: (error) => console.log(`external 회원가입 실패, error: ${error}`),
  });
  return mutation;
};

export default usePostExternalSignUp;
