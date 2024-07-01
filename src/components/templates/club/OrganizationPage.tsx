import Heading from "~/components/atoms/club/Heading";
import { OrganizationChartWrap, OrganizationPageLayout } from "./OrganizationPageStyles";
import helmet from "~/assets/images/helmet.svg";
import OrganizationChart from "../../atoms/club/organization/OrganizationChart";
import organization from "~/assets/images/organization.svg";

const Organization = () => {
  return (
    <OrganizationPageLayout>
      <Heading src={helmet} alt="helmet" text="조직도" />
      <OrganizationChartWrap>
        <OrganizationChart src={organization} alt="조직도" />
      </OrganizationChartWrap>
    </OrganizationPageLayout>
  );
};

export default Organization;
