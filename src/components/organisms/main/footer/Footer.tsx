import FooterContent from "~/components/molecules/main/footer/FooterContent";
import FooterEdge from "~/components/atoms/main/footer/FooterEdge";
import { FooterBox, FooterEdgeWrap, FooterContentWrap } from "./FooterStyles";

const Footer = () => {
  return (
    <FooterBox>
      <FooterContentWrap>
        <FooterContent />
      </FooterContentWrap>
      <FooterEdgeWrap>
        <FooterEdge />
      </FooterEdgeWrap>
    </FooterBox>
  );
};

export default Footer;
