import { SponsorLayout, SponsorList } from "./SponsorStyles";
import Company from "~/components/atoms/club/sponsor/Company";
import LasanLogo from "~/assets/images/lasangroup.svg";
import IlogisticLogo from "~/assets/images/ilogistic.svg";

const Sponsor = () => {
  return (
    <SponsorLayout>
      <SponsorList>
        <Company SponsorNameKo="라산 그룹" SponsorNameEn="LASAN GROUP" src={LasanLogo} />
        <Company SponsorNameKo="아이로지스틱" SponsorNameEn="ILOGISTIC" src={IlogisticLogo} />
        <Company SponsorNameKo="테스트" SponsorNameEn="테스트" src={IlogisticLogo} />
      </SponsorList>
    </SponsorLayout>
  );
};

export default Sponsor;
