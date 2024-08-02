import { ItemInputFieldBox } from "./ItemInputFieldStyles";
import ItemInput from "~/components/atoms/signUp/body/ItemInput";
import ItemCondition from "~/components/atoms/signUp/body/ItemCondition";
import ItemTitle from "~/components/atoms/signUp/body/ItemTitle";
import { ChangeEvent } from "react";

interface Props {
  id: string;
  text: string;
  required: boolean;
  condition?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const ItemInputField = ({ id, text, required, condition, onChange }: Props) => {
  return (
    <ItemInputFieldBox>
      <ItemTitle id={id} text={text} required={required} />
      <ItemInput id={id} required={required} onChange={onChange} />
      {condition && <ItemCondition text={condition} />}
    </ItemInputFieldBox>
  );
};

export default ItemInputField;
