import { LoginButton, LoginInput, LoginLayout } from "./LoginStyles";

const Login = () => {
  return (
    <LoginLayout>
      <LoginInput placeholder="ID" />
      <LoginInput placeholder="PASSWORD" />
      <LoginButton>로그인</LoginButton>
    </LoginLayout>
  );
};

export default Login;
