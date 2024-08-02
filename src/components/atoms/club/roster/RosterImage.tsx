import { RosterImageBox, RosterPersonImage } from "./RosterImageStyles";

interface Props {
  src: string;
}

const RosterImage = ({ src }: Props) => (
  <RosterImageBox>
    <RosterPersonImage src={src} alt="" />
  </RosterImageBox>
);

export default RosterImage;
