import { ChangeEvent, FormEvent, useCallback, useEffect, useState } from "react";
import Account from "~/components/atoms/main/header/Account";
import logInOut from "~/assets/images/loginout.svg";
import signUp from "~/assets/images/singup.svg";
import LoginModal from "~/components/atoms/main/header/LoginModal";
import usePostLogin from "~/hooks/login/mutate/usePostLogin";
import { AccountsBox, AccountsWrap } from "./AccountsStyles";

const Accounts = () => {
  const [loginText, setLoginText] = useState("LOG IN");
  const [isOpenModal, setOpenModal] = useState<boolean>(false);
  const postLogin = usePostLogin();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);

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

  useEffect(() => {
    if (postLogin.isSuccess) {
      setLoginText("Log out");
      onClickToggleModal();
    }
  }, [postLogin.isSuccess]);

  useEffect(() => {
    // TODO: [2024-08-05] 추후 userType 값이 백엔드에서 반환되면, userType 값을 활용하는 코드로 수정
    const token = localStorage.getItem("token");
    if (token) {
      setLoginText("Log out");
    }
  }, []);

  return (
    <AccountsBox>
      <AccountsWrap>
        <Account src={logInOut} alt="Log inout" text={loginText} onClick={onClickToggleModal} />
        {isOpenModal && (
          <LoginModal
            onClickToggleModal={onClickToggleModal}
            handleEnterUserId={handleEnterUserId}
            handleEnterPassword={handleEnterPassword}
            handleClickLogin={handleClickLogin}></LoginModal>
        )}
        <Account src={signUp} alt="Sign up" text="SIGN UP" onClick={onClickToggleModal} />
      </AccountsWrap>
    </AccountsBox>
  );
};

export default Accounts;
