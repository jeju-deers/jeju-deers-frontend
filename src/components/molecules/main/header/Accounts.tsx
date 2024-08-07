import { ChangeEvent, FormEvent, useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Account from "~/components/atoms/main/header/Account";
import logInOut from "~/assets/images/loginout.svg";
import signUp from "~/assets/images/singup.svg";
import LoginModal from "~/components/atoms/main/header/LoginModal";
import usePostLogin from "~/hooks/login/mutate/usePostLogin";
import { AccountsBox, AccountsWrap } from "./AccountsStyles";

const Accounts = () => {
  const [loginText, setLoginText] = useState("LOG IN");
  const [signUpText, setSignUpText] = useState("SIGN UP");
  const [signUpLink, setSignUpLink] = useState("/signup");
  const [isOpenModal, setOpenModal] = useState<boolean>(false);
  const postLogin = usePostLogin();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  // TODO: [2024-08-05] 추후 userType 값이 백엔드에서 반환되면, userType 값을 활용하는 코드로 수정
  const token = localStorage.getItem("token");

  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);

  const handleClickLogInOutButton = () => {
    if (token) {
      localStorage.removeItem("token");
      setLoginText("LOG IN");
      setSignUpText("SIGN UP");
      setSignUpLink("/my_page");
      alert("로그아웃 되었습니다.");
    } else {
      onClickToggleModal();
    }
  };

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

  // TODO: [2024-08-05] 현재 usePostLogin훅 내에서 onSuccess를 사용하고 있고, 아래 코드에서 isSuccess를 사용하고 있어 리팩토링 필요
  useEffect(() => {
    if (postLogin.isSuccess) {
      setLoginText("LOG OUT");
      setSignUpText("MY PAGE");
      setSignUpLink("/my_page");
      onClickToggleModal();
    }
  }, [postLogin.isSuccess]);

  useEffect(() => {
    // TODO: [2024-08-05] 추후 userType 값이 백엔드에서 반환되면, userType 값을 활용하는 코드로 수정
    if (token) {
      setLoginText("LOG OUT");
      setSignUpText("MY PAGE");
      setSignUpLink("/my_page");
    } else {
      setLoginText("LOG IN");
      setSignUpText("SIGN UP");
      setSignUpLink("/signup");
    }
  }, [token]);

  return (
    <AccountsBox>
      <AccountsWrap>
        <Account
          src={logInOut}
          alt="Log inout"
          text={loginText}
          onClick={handleClickLogInOutButton}
        />
        {isOpenModal && (
          <LoginModal
            onClickToggleModal={onClickToggleModal}
            handleEnterUserId={handleEnterUserId}
            handleEnterPassword={handleEnterPassword}
            handleClickLogin={handleClickLogin}></LoginModal>
        )}
        <Link to={signUpLink}>
          <Account src={signUp} alt="Sign up" text={signUpText} />
        </Link>
      </AccountsWrap>
    </AccountsBox>
  );
};

export default Accounts;
