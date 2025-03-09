import ItemTitle from "~/common/components/atom/accountManagement/body/ItemTitle";
import { ItemInputFieldBox } from "./ItemSelectFieldStyles";
import ItemCondition from "~/common/components/atom/accountManagement/body/ItemCondition";
import Dropdown from "~/components/atoms/adminEditAccount/Dropdown";

interface Props {
  id: string;
  text: string;
  options: string[];
  required: boolean;
  condition?: string;
  onOptionSelected: (value: string) => void;
}

const ItemSelectField = ({ id, text, options, required, condition, onOptionSelected }: Props) => {
  return (
    <ItemInputFieldBox>
      <ItemTitle id={id} text={text} required={required} />
      <Dropdown text={text} options={options} onOptionSelected={onOptionSelected} />
      {condition && <ItemCondition text={condition} />}
    </ItemInputFieldBox>
  );
};

export default ItemSelectField;
