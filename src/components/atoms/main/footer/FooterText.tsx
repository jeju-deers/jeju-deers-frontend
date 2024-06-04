import { FooterTextSpan } from "./FooterTextStyles";

interface Props {
  text: String;
}

const FooterText = ({ text }: Props) => {
  return <FooterTextSpan>{text}</FooterTextSpan>;
};

export default FooterText;
