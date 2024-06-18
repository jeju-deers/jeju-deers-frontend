import { ItemInputFieldBox } from "./ItemInputFieldStyles";
import ItemInput from "~/components/atoms/signUp/body/ItemInput";
import ItemCondition from "~/components/atoms/signUp/body/ItemCondition";
import ItemTitle from "~/components/atoms/signUp/body/ItemTitle";

interface Props {
  id: string;
  text: string;
  required: boolean;
  condition?: string;
}

const ItemInputField = ({ id, text, required, condition }: Props) => {
  return (
    <ItemInputFieldBox>
      <ItemTitle id={id} text={text} required={required} />
      <ItemInput id={id} required={required} />
      {condition && <ItemCondition text={condition} />}
    </ItemInputFieldBox>
  );
};

export default ItemInputField;
