import FooterBottom from "~/components/atoms/main/footer/FooterBottom";
import FooterEdge from "~/components/atoms/main/footer/FooterEdge";
import { FooterDecorationBox } from "./FooterDecorationStyles";

const FooterDecoration = () => {
  return (
    <FooterDecorationBox>
      <FooterBottom />
      <FooterEdge />
    </FooterDecorationBox>
  );
};

export default FooterDecoration;
