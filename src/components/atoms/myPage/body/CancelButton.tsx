import { CancelButtonButton } from "./CancelButtonStyles";

interface Props {
  text: string;
  onClick: () => void;
}

const CancelButton = ({ text, onClick }: Props) => {
  return (
    <CancelButtonButton type="button" onClick={onClick}>
      {text}
    </CancelButtonButton>
  );
};

export default CancelButton;
