import { FooterBox } from "./FooterStyles";
import FooterContent from "~/components/molecules/main/footer/FooterContent";
import FooterDesign from "~/components/molecules/main/footer/FooterDesign";

const Footer = () => {
  return (
    <FooterBox>
      <FooterDesign />
      <FooterContent />
    </FooterBox>
  );
};

export default Footer;
