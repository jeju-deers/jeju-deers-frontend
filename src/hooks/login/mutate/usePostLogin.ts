import { useMutation } from "@tanstack/react-query";
import { postLogin } from "~/api/user";

interface Params {
  userId: string; // TODO: [2024-07-16] api 문서에 username 데이터를 전송한다고 표시되어있어 확인이 필요합니다.
  password: string;
}

const usePostLogin = () => {
  const mutation = useMutation({
    mutationFn: ({ userId, password }: Params) =>
      postLogin({
        userId,
        password,
      }),
    onSuccess: (data) => {
      console.log(`로그인 성공, data: ${data}`);
    },
    onError: (error) => console.log(`로그인 실패, error: ${error}`),
  });
  return mutation;
};

export default usePostLogin;
