import { ButtonButton } from "./ButtonStyles";

interface Props {
  text: string;
  image?: string;
  styleType: string;
  onClick?: any;
}

const Button = ({ text, image, styleType, onClick }: Props) => {
  return (
    <ButtonButton styleType={styleType} onClick={onClick}>
      {text}
      {image && <img src={image} />}
    </ButtonButton>
  );
};

export default Button;
