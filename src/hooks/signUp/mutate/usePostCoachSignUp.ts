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
  school: string;
  studentId: string;
  positions: string;
}

const usePostCoachSignUp = () => {
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
    }: Params) =>
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
      }),
    onSuccess: (data) => {
      console.log(`coach 회원가입 성공, data: ${data}`);
    },
    onError: (error) => console.log(`coach 회원가입 실패, error: ${error}`),
  });
  return mutation;
};

export default usePostCoachSignUp;
