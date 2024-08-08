import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { postSignUp } from "~/api/account";

interface Props {
  userType: "external" | "player" | "coach";
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
  const navigate = useNavigate();

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
      alert("회원가입 되었습니다.");
      navigate("/");
    },
    onError: (error) => console.log(`player 회원가입 실패, error: ${error}`),
  });
  return mutation;
};

export default usePostPlayerSignUp;
