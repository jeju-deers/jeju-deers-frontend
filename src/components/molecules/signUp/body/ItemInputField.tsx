import EssentialMark from "~/components/atoms/signUp/body/EssentialMark";
import { ItemInputFieldBox, ItemInputFieldLabelBox } from "./ItemInputFieldStyles";
import ItemLabel from "~/components/atoms/signUp/body/ItemLabel";
import ItemInput from "~/components/atoms/signUp/body/ItemInput";
import ItemCondition from "~/components/atoms/signUp/body/ItemCondition";

interface Props {
  id: string;
  text: string;
  required: boolean;
  condition?: string;
}

const ItemInputField = ({ id, text, required, condition }: Props) => {
  return (
    <ItemInputFieldBox>
      <ItemInputFieldLabelBox>
        {required && <EssentialMark />}
        <ItemLabel id={id} text={text} />
      </ItemInputFieldLabelBox>
      <ItemInput id={id} required={required} />
      {condition && <ItemCondition text={condition} />}
    </ItemInputFieldBox>
  );
};

export default ItemInputField;
