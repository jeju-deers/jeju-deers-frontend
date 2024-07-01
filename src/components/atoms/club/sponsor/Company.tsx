import {
  SponsorBox,
  SponsorLogoImage,
  SponsorNameBox,
  SponsorNameEnSpan,
  SponsorNameKoSpan,
} from "./CompanyStyles";

interface Props {
  SponsorNameKo: string;
  SponsorNameEn: string;
  src: string;
}

const Company = ({ SponsorNameKo, SponsorNameEn, src }: Props) => (
  <SponsorBox>
    <SponsorLogoImage src={src} alt="Logo" />
    <SponsorNameBox>
      <SponsorNameKoSpan>{SponsorNameKo}</SponsorNameKoSpan>
      <SponsorNameEnSpan>({SponsorNameEn})</SponsorNameEnSpan>
    </SponsorNameBox>
  </SponsorBox>
);

export default Company;
