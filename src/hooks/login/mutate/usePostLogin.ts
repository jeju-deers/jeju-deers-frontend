import { useMutation } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { postLogin } from "~/api/user";

interface Params {
  userId: string;
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
      localStorage.setItem("token", loginResponse.data.token);
    },
    onError: (error: Error) => {
      console.log(`로그인 실패, error: ${error}`);

      if (!axios.isAxiosError(error)) {
        return;
      }

      const statusCode = error.response?.status;

      if (statusCode === 401) {
        alert("아이디 혹은 비밀번호가 유효하지 않습니다.");
      }
      if (statusCode === 500) {
        alert("Login failed");
      }
    },
  });
  return mutation;
};

export default usePostLogin;
