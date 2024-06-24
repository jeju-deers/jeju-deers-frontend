import { SponsorPageLayout, SponsorList } from "./SponsorPageStyles";
import Company from "~/components/atoms/club/Company";
import LasanLogo from "~/assets/images/lasangroup.svg";
import IlogisticLogo from "~/assets/images/ilogistic.svg";

const Sponsor = () => {
  return (
    <SponsorPageLayout>
      <SponsorList>
        <Company SponsorNameKo="라산 그룹" SponsorNameEn="LASAN GROUP" src={LasanLogo} />
        <Company SponsorNameKo="아이로지스틱" SponsorNameEn="ILOGISTIC" src={IlogisticLogo} />
        <Company SponsorNameKo="테스트" SponsorNameEn="테스트" src={IlogisticLogo} />
      </SponsorList>
    </SponsorPageLayout>
  );
};

export default Sponsor;
