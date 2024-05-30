import FooterContent from "~/components/molecules/main/footer/FooterContent";
import FooterEdge from "~/components/atoms/main/footer/FooterEdge";
import { FooterBox, FooterEdgeWrap } from "./FooterStyles";

const Footer = () => {
  return (
    <FooterBox>
      <FooterContent />
      <FooterEdgeWrap>
        <FooterEdge />
      </FooterEdgeWrap>
    </FooterBox>
  );
};

export default Footer;
