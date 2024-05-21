import React from "react";
import { SocialIconImg } from "./SocialIconStyles";

interface SocialIconProps {
  src: string;
  alt: string;
}

const SocialIcon: React.FunctionComponent<SocialIconProps> = ({ src, alt }) => {
  return <SocialIconImg src={src} alt={alt} />;
};

export default SocialIcon;
