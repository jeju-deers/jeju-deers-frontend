import { useMutation } from "@tanstack/react-query";
import { postSignUp } from "~/api/user";

interface Props {
  // userType: "external" | "player" | "coach";
  userType: string;
  userId: string;
  password: string;
  passwordConfirm: string;
  name: string;
  nickname?: string;
  email: string;
  school: string;
  studentId: string;
  positions: string;
  backNumber: string;
}

const usePostPlayerSignUp = () => {
  const mutation = useMutation({
    mutationFn: ({
      userType,
      userId,
      password,
      passwordConfirm,
      name,
      nickname,
      email,
      school,
      studentId,
      positions,
      backNumber,
    }: Props) =>
      postSignUp({
        userType,
        userId,
        password,
        passwordConfirm,
        name,
        nickname,
        email,
        school,
        studentId,
        positions,
        backNumber,
      }),
    onSuccess: (data) => {
      console.log(`player 회원가입 성공, data: ${data}`);
    },
    onError: (error) => console.log(`player 회원가입 실패, error: ${error}`),
  });
  return mutation;
};

export default usePostPlayerSignUp;
