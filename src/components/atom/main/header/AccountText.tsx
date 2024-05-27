import { AccountTextParagraph } from "./AccountTextStyles";

interface Props {
  text: string;
}

const AccountText = ({ text }: Props) => {
  return <AccountTextParagraph>{text}</AccountTextParagraph>;
};

export default AccountText;
