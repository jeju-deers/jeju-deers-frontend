import ItemTitle from "~/common/components/atom/accountManagement/body/ItemTitle";
import { ItemInputFieldBox } from "./ItemInputFieldStyles";
import { ChangeEvent } from "react";
import ItemInput from "~/common/components/atom/accountManagement/body/ItemInput";
import ItemCondition from "~/common/components/atom/accountManagement/body/ItemCondition";

interface Props {
  id: string;
  text: string;
  value?: string;
  required: boolean;
  pattern?: string;
  condition?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const ItemInputField = ({ id, text, value, required, pattern, condition, onChange }: Props) => {
  return (
    <ItemInputFieldBox>
      <ItemTitle id={id} text={text} required={required} />
      <ItemInput id={id} value={value} required={required} pattern={pattern} onChange={onChange} />
      {condition && <ItemCondition text={condition} />}
    </ItemInputFieldBox>
  );
};

export default ItemInputField;
