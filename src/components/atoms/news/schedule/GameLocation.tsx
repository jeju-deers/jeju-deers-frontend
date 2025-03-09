import LocationMarker from "~/assets/images/location_marker.svg";
import { GameLocationBox, GameLocationMarkerImage, GameLocationSpan } from "./GameLocationStyles";

interface Props {
  location: string;
}

const GameLocation = ({ location }: Props) => {
  const locationUrl = `https://map.kakao.com/?q=${encodeURIComponent(location)}`;
  return (
    <a href={locationUrl} target="_blank" rel="noopener noreferrer">
      <GameLocationBox>
        <GameLocationMarkerImage src={LocationMarker} alt="marker" />
        <GameLocationSpan>{location}</GameLocationSpan>
      </GameLocationBox>
    </a>
  );
};

export default GameLocation;
