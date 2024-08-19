import { AccountBox, AccountLogoImage, AccountTextSpan } from "./AccountStyles";

interface Props {
  src: string;
  alt: string;
  text: string;
  onClick?: () => void;
}

const Account = ({ src, alt, text, onClick }: Props) => {
  return (
    <AccountBox onClick={onClick}>
      <AccountLogoImage src={src} alt={alt} />
      <AccountTextSpan>{text}</AccountTextSpan>
    </AccountBox>
  );
};

export default Account;
