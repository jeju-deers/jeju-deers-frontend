import { ChangeEvent, FormEvent } from "react";
import { LoginButton, LoginForm, LoginInput, LoginLayout } from "./LoginStyles";

interface Props {
  handleEnterUserId: (event: ChangeEvent<HTMLInputElement>) => void;
  handleEnterPassword: (event: ChangeEvent<HTMLInputElement>) => void;
  handleClickLogin: (event: FormEvent<HTMLFormElement>) => void;
}

const Login = ({ handleEnterUserId, handleEnterPassword, handleClickLogin }: Props) => {
  return (
    <LoginLayout>
      <LoginForm id="login" onSubmit={handleClickLogin}>
        <LoginInput placeholder="ID" onChange={handleEnterUserId} />
        <LoginInput placeholder="PASSWORD" onChange={handleEnterPassword} />
        <LoginButton form="login" type="submit">
          로그인
        </LoginButton>
      </LoginForm>
    </LoginLayout>
  );
};

export default Login;
