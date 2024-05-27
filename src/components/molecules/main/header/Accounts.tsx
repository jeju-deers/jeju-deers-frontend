import Account from "./Account";
import logInOut from "~/assets/images/loginout.svg";
import signUp from "~/assets/images/singup.svg";
import { AccountsBox } from "./AccountsStyles";

const Accounts = () => {
  return (
    <AccountsBox>
      <Account src={logInOut} alt="Log inout" text="LOG IN" />
      <Account src={signUp} alt="Sign up" text="SIGN UP" />
    </AccountsBox>
  );
};

export default Accounts;
