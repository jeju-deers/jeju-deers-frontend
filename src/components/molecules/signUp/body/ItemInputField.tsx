import { ItemInputFieldBox } from "./ItemInputFieldStyles";
import ItemInput from "~/components/atoms/signUp/body/ItemInput";
import ItemCondition from "~/components/atoms/signUp/body/ItemCondition";
import ItemTitle from "~/components/atoms/signUp/body/ItemTitle";
import { ChangeEvent } from "react";

interface Props {
  type?: string;
  id: string;
  text: string;
  required: boolean;
  pattern?: string;
  condition?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const ItemInputField = ({ type, id, text, required, pattern, condition, onChange }: Props) => {
  return (
    <ItemInputFieldBox>
      <ItemTitle id={id} text={text} required={required} />
      <ItemInput type={type} id={id} required={required} pattern={pattern} onChange={onChange} />
      {condition && <ItemCondition text={condition} />}
    </ItemInputFieldBox>
  );
};

export default ItemInputField;
