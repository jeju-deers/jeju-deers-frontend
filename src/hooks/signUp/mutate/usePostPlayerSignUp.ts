import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { postSignUp } from "~/api/account";

interface Props {
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
  birth: string;
  belong: string;
  joinYear: string;
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
      birth,
      belong,
      joinYear,
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
        birth,
        belong,
        joinYear,
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
