import { OrganizationChartImage } from "./OrganizationChartStyles";

interface Props {
  src: string;
  alt: string;
}

const OrganizationChart = ({ src, alt }: Props) => {
  return <OrganizationChartImage src={src} alt={alt} />;
};

export default OrganizationChart;
