import youtube from "../../../../assets/images/youtube_logo.svg";
import instagram from "../../../../assets/images/instagram_logo.svg";
import { SocialIconsBox } from "./SocialIconsStyles";
import { SocialIconImg } from "../../../atom/main/sidebar/SocialIconStyles";

const SocialIcons: React.FunctionComponent = () => {
  const SocialItems = [
    { src: `${youtube}`, alt: "Youtube", href: "https://www.youtube.com/@jeju_deers_official" },
    {
      src: `${instagram}`,
      alt: "Instagram",
      href: "https://www.instagram.com/jeju_deers_football/",
    },
  ];

  return (
    <SocialIconsBox>
      {SocialItems.map((item, index) => (
        <a key={index} href={item.href} target="_blank" rel="noopener noreferrer">
          <SocialIconImg src={item.src} alt={item.alt} />
        </a>
      ))}
    </SocialIconsBox>
  );
};

export default SocialIcons;
