import { FooterParagraph } from "./FooterTextStyles";

interface Props {
  text: String;
}

const FooterText = ({ text }: Props) => {
  return <FooterParagraph>{text}</FooterParagraph>;
};

export default FooterText;
