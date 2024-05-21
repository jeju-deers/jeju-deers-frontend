import React from "react";
import { SocialIconImage } from "./SocialIconStyles";

interface Props {
  src: string;
  alt: string;
}

const SocialIcon: React.FunctionComponent<Props> = ({ src, alt }) => {
  return <SocialIconImage src={src} alt={alt} />;
};

export default SocialIcon;
