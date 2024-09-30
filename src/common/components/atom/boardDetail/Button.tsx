import { ButtonButton } from "./ButtonStyles";

interface Props {
  text: string;
  image?: string;
  styleType: string;
}

const Button = ({ text, image, styleType }: Props) => {
  return (
    <ButtonButton styleType={styleType}>
      {text}
      {image && <img src={image} />}
    </ButtonButton>
  );
};

export default Button;
