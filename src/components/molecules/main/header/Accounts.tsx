import Account from "~/components/atoms/main/header/Account";
import logInOut from "~/assets/images/loginout.svg";
import signUp from "~/assets/images/singup.svg";
import { AccountsBox, AccountsWrap } from "./AccountsStyles";
import Modal from "~/components/templates/login/Login";
import { useCallback, useState } from "react";

const Accounts = () => {
  const [isOpenModal, setOpenModal] = useState<boolean>(false);

  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);

  return (
    <AccountsBox>
      <AccountsWrap>
        <Account src={logInOut} alt="Log inout" text="LOG IN" onClick={onClickToggleModal} />
        {isOpenModal && (
          <Modal onClickToggleModal={onClickToggleModal}>이곳에 children이 들어갑니다.</Modal>
        )}
        <Account src={signUp} alt="Sign up" text="SIGN UP" onClick={onClickToggleModal} />
      </AccountsWrap>
    </AccountsBox>
  );
};

export default Accounts;
