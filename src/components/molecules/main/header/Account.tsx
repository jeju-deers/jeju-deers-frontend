import { AccountBox, AccountWrap } from "./AccountStyles";
import AccountText from "../../../atom/main/header/AccountText";
import AccountLogo from "~/components/atom/main/header/AccountLogo";

interface Props {
  src: string;
  alt: string;
  text: string;
}

const Account = ({ src, alt, text }: Props) => {
  return (
    <AccountBox>
      <AccountWrap>
        <AccountLogo src={src} alt={alt} />
        <AccountText text={text} />
      </AccountWrap>
    </AccountBox>
  );
};

export default Account;
