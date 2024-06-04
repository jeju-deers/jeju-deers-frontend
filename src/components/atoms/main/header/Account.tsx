import { AccountBox, AccountLogoImage, AccountTextSpan } from "./AccountStyles";

interface Props {
  src: string;
  alt: string;
  text: string;
}

const Account = ({ src, alt, text }: Props) => {
  return (
    <AccountBox>
      <AccountLogoImage src={src} alt={alt} />
      <AccountTextSpan>{text}</AccountTextSpan>
    </AccountBox>
  );
};

export default Account;
