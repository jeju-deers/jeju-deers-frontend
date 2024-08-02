import {
  AboutTeamBox,
  TeamLogoImage,
  TeamNameBox,
  TeamNameEnSpan,
  TeamNameKoSpan,
} from "./AboutTeamStyles";
import TeamLogo from "~/assets/images/footer_logo.svg";

const AboutTeam = () => (
  <AboutTeamBox>
    <TeamLogoImage src={TeamLogo} alt="Team Logo" />
    <TeamNameBox>
      <TeamNameKoSpan>제주대학교 미식축구부 제주디어스</TeamNameKoSpan>
      <TeamNameEnSpan>(JEJU American Football Team DEERS)</TeamNameEnSpan>
    </TeamNameBox>
  </AboutTeamBox>
);

export default AboutTeam;
