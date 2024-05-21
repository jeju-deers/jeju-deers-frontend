import React from "react";
import { SocialIconImage } from "./SocialIconStyles";

interface SocialIconProps {
  src: string;
  alt: string;
}

const SocialIcon: React.FunctionComponent<SocialIconProps> = ({ src, alt }) => {
  return <SocialIconImage src={src} alt={alt} />;
};

export default SocialIcon;
