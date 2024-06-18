import { ItemRadioBox, ItemRadioInput, ItemRadioLabel } from "./ItemRadioStyles";

interface Props {
  radioTitle: string;
  id: string;
  text: string;
  checked?: boolean;
  onChange?: (element: React.ChangeEvent<HTMLInputElement>) => void;
}

const ItemRadio = ({ radioTitle, id, text, checked, onChange }: Props) => {
  return (
    <ItemRadioBox>
      <ItemRadioInput
        type="radio"
        id={id}
        name={radioTitle}
        value={id}
        checked={checked}
        onChange={onChange}
      />
      <ItemRadioLabel htmlFor={id}>{text}</ItemRadioLabel>
    </ItemRadioBox>
  );
};

export default ItemRadio;
