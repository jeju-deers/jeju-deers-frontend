import youtube from "~/assets/images/youtube_logo.svg";
import instagram from "~/assets/images/instagram_logo.svg";
import { SocialIconsBox } from "./SocialIconsStyles";
import SocialIcon from "~/components/atoms/main/sidebar/SocialIcon";

const SocialIcons = () => {
  return (
    <SocialIconsBox>
      <SocialIcon src={youtube} alt="Youtube" href="https://www.youtube.com/@jeju_deers_official" />
      <SocialIcon
        src={instagram}
        alt="Instagram"
        href="https://www.instagram.com/jeju_deers_football/"
      />
    </SocialIconsBox>
  );
};

export default SocialIcons;
