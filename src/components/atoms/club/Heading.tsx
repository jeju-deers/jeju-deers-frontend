import { HeadingBox, HeadingLogoImage, HeadingTextSpan } from "./HeadingStyles";

interface Props {
  src: string;
  alt: string;
  text: string;
}

const Heading = ({ src, alt, text }: Props) => {
  return (
    <HeadingBox>
      <HeadingLogoImage src={src} alt={alt} />
      <HeadingTextSpan>{text}</HeadingTextSpan>
    </HeadingBox>
  );
};

export default Heading;
