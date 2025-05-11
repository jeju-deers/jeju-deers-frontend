import ItemTitle from "~/common/components/atom/accountManagement/body/ItemTitle";
import { ItemInputFieldBox } from "./ItemSelectFieldStyles";
import ItemCondition from "~/common/components/atom/accountManagement/body/ItemCondition";
import Dropdown from "~/components/atoms/adminEditAccount/Dropdown";

interface Props {
  id: string;
  title: string;
  selectText: string;
  options: string[];
  required: boolean;
  condition?: string;
  onOptionSelected: (value: string) => void;
}

const ItemSelectField = ({
  id,
  title,
  selectText,
  options,
  required,
  condition,
  onOptionSelected,
}: Props) => {
  return (
    <ItemInputFieldBox>
      <ItemTitle id={id} text={title} required={required} />
      <Dropdown text={selectText} options={options} onOptionSelected={onOptionSelected} />
      {condition && <ItemCondition text={condition} />}
    </ItemInputFieldBox>
  );
};

export default ItemSelectField;
