import FooterLogo from "~/components/atom/main/footer/FooterLogo";
import { FooterContentBox } from "./FooterContentStyles";
import FooterText from "~/components/atom/main/footer/FooterText";

const FooterContent = () => {
  return (
    <FooterContentBox>
      <FooterText text="@COPY RIGHT by JEJU DEERS" />
      <FooterLogo />
      <FooterText text="후원 계좌 : 3333259404347 카카오뱅크" />
    </FooterContentBox>
  );
};

export default FooterContent;
