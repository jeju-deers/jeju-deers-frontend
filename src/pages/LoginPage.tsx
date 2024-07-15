import { ChangeEvent, FormEvent, useState } from "react";
import Login from "~/components/templates/login/Login";
import usePostLogin from "~/hooks/login/mutate/usePostLogin";

const LoginPage = () => {
  const postLogin = usePostLogin();

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleEnterUserId = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setUserId(value);
  };

  const handleEnterPassword = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setPassword(value);
  };

  const handleClickLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    postLogin.mutate({
      userId: userId, // TODO: [2024-07-16] api 문서에 username 데이터를 전송한다고 표시되어있어 확인이 필요합니다.
      password: password,
    });
  };

  return (
    <Login
      handleEnterUserId={handleEnterUserId}
      handleEnterPassword={handleEnterPassword}
      handleClickLogin={handleClickLogin}
    />
  );
};

export default LoginPage;
