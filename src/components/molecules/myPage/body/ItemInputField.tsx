import { ItemInputFieldBox } from "./ItemInputFieldStyles";
import ItemInput from "~/components/atoms/myPage/body/ItemInput";
import ItemCondition from "~/components/atoms/myPage/body/ItemCondition";
import ItemTitle from "~/components/atoms/myPage/body/ItemTitle";
import { ChangeEvent } from "react";

interface Props {
  id: string;
  text: string;
  value?: string;
  required: boolean;
  condition?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const ItemInputField = ({ id, text, value, required, condition, onChange }: Props) => {
  return (
    <ItemInputFieldBox>
      <ItemTitle id={id} text={text} required={required} />
      <ItemInput id={id} value={value} required={required} onChange={onChange} />
      {condition && <ItemCondition text={condition} />}
    </ItemInputFieldBox>
  );
};

export default ItemInputField;
