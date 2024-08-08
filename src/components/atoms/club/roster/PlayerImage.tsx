import { PlayerImageBox, PlayerPersonImage } from "./PlayerImageStyles";

interface Props {
  src: string;
}

const PlayerImage = ({ src }: Props) => (
  <PlayerImageBox>
    <PlayerPersonImage src={src} alt="" />
  </PlayerImageBox>
);

export default PlayerImage;
