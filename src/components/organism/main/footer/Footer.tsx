import FooterDecoration from "~/components/molecules/main/footer/FooterDecoration";
import FooterContent from "~/components/molecules/main/footer/FooterContent";
import { FooterBox } from "./FooterStyles";

const Footer = () => {
  return (
    <FooterBox>
      <FooterDecoration />
      <FooterContent />
    </FooterBox>
  );
};

export default Footer;
