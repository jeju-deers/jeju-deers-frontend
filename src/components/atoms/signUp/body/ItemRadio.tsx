import { ItemRadioBox, ItemRadioInput, ItemRadioLabel } from "./ItemRadioStyles";

interface Props {
  radioTitle: string;
  id: string;
  text: string;
  checked?: boolean;
  onClick?: (element: any) => void;
}

const ItemRadio = ({ radioTitle, id, text, checked, onClick }: Props) => {
  return (
    <ItemRadioBox>
      <ItemRadioInput
        type="radio"
        id={id}
        name={radioTitle}
        value={id}
        checked={checked}
        onClick={onClick}
      />
      <ItemRadioLabel htmlFor={id}>{text}</ItemRadioLabel>
    </ItemRadioBox>
  );
};

export default ItemRadio;
