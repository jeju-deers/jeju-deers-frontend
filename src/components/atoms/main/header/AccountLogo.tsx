import { AccountLogoImage } from "./AccountLogoStyles";

interface Props {
  src: string;
  alt: string;
}

const AccountLogo = ({ src, alt }: Props) => {
  return <AccountLogoImage src={src} alt={alt} />;
};

export default AccountLogo;
