import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import Account from "~/components/atoms/main/header/Account";
import logInOut from "~/assets/images/loginout.svg";
import signUp from "~/assets/images/singup.svg";
import LoginModal from "~/components/atoms/main/header/LoginModal";
import usePostLogin from "~/hooks/login/mutate/usePostLogin";
import { AccountsBox, AccountsWrap } from "./AccountsStyles";

const Accounts = () => {
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

  return (
    <AccountsBox>
      <AccountsWrap>
        <Account src={logInOut} alt="Log inout" text="LOG IN" onClick={onClickToggleModal} />
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
