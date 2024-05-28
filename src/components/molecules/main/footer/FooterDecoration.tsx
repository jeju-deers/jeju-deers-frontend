import FooterBottom from "~/components/atom/main/footer/FooterBottom";
import FooterEdge from "~/components/atom/main/footer/FooterEdge";
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
