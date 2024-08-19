import Heading from "~/components/atoms/club/Heading";
import { AboutLayout } from "./AboutStyles";
import helmet from "~/assets/images/helmet.svg";
import AboutTeam from "~/components/atoms/club/about/AboutTeam";
import History from "~/components/atoms/club/about/History";
import HISTORY_DATA from "../../../constants/historyData";

const About = () => (
  <AboutLayout>
    <Heading src={helmet} alt="helmet" text="개요" />
    <AboutTeam />
    <Heading src={helmet} alt="helmet" text="연혁" />
    <History historyData={HISTORY_DATA} />
  </AboutLayout>
);

export default About;
