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
      userId: userId,
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
