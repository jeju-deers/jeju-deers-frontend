import { ItemRadioBox, ItemRadioInput, ItemRadioLabel } from "./ItemRadioStyles";

interface Props {
  radioTitle: string;
  id: string;
  text: string;
  checked?: boolean;
}

const ItemRadio = ({ radioTitle, id, text, checked }: Props) => {
  return (
    <ItemRadioBox>
      <ItemRadioInput type="radio" id={id} name={radioTitle} value={id} checked={checked} />
      <ItemRadioLabel htmlFor={id}>{text}</ItemRadioLabel>
    </ItemRadioBox>
  );
};

export default ItemRadio;
