import { SocialIconImage } from "./SocialIconStyles";

interface Props {
  src: string;
  alt: string;
  href: string;
}

const SocialIcon = ({ src, alt, href }: Props) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <SocialIconImage src={src} alt={alt} />
    </a>
  );
};

export default SocialIcon;
