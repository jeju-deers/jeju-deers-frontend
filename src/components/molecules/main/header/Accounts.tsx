import Account from "~/components/atoms/main/header/Account";
import logInOut from "~/assets/images/loginout.svg";
import signUp from "~/assets/images/singup.svg";
import { AccountsBox, AccountsWrap } from "./AccountsStyles";

const Accounts = () => {
  return (
    <AccountsBox>
      <AccountsWrap>
        <Account src={logInOut} alt="Log inout" text="LOG IN" />
        <Account src={signUp} alt="Sign up" text="SIGN UP" />
      </AccountsWrap>
    </AccountsBox>
  );
};

export default Accounts;
