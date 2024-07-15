import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError, AxiosResponse } from "axios";
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
    onSuccess: (loginResponse: AxiosResponse) => {
      console.log(`로그인 성공, data: ${loginResponse}, token: ${loginResponse.data.token}`);
      // TODO: [2024-07-16] 백엔드 서버를 킨 후 loginResponse.data.token이 정상적으로 응답 토큰 값을 가지는지 확인이 필요합니다.
      localStorage.setItem("token", loginResponse.data.token);
    },
    onError: (error: Error | AxiosError) => {
      console.log(`로그인 실패, error: ${error}`);

      // TODO: [2024-07-16] 백엔드 서버를 킨 후 아래 코드들이 정상적으로 동작하는지 확인이 필요합니다.
      if (!axios.isAxiosError(error)) {
        return;
      }

      const { statusCode } = error.response?.data;

      if (statusCode === 401) {
        alert("아이디 혹은 비밀번호가 유효하지 않습니다.");
        console.log("아이디 혹은 비밀번호가 유효하지 않습니다.");
      }
      if (statusCode === 500) {
        alert("Login failed");
        console.log("Login failed");
      }
    },
  });
  return mutation;
};

export default usePostLogin;
