import FooterBottom from "~/components/atom/main/footer/FooterBottom";
import FooterEdge from "~/components/atom/main/footer/FooterEdge";
import { FooterDesignBox } from "./FooterDesignStyles";

const FooterDesign = () => {
  return (
    <FooterDesignBox>
      <FooterBottom />
      <FooterEdge />
    </FooterDesignBox>
  );
};

export default FooterDesign;
