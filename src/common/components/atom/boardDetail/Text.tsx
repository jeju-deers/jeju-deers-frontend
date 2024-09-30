import { TextSpan } from "./TextStyles";

interface Props {
  text: string;
  image?: string;
  className?: string;
}
const Text = ({ text, image, className }: Props) => {
  return (
    <TextSpan className={className}>
      {text}
      {image && <img src={image} />}
    </TextSpan>
  );
};

export default Text;
