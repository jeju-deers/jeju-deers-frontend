import ItemTitle from "~/common/components/atom/accountManagement/body/ItemTitle";
import { ItemInputFieldBox } from "./ItemSelectFieldStyles";
import ItemCondition from "~/common/components/atom/accountManagement/body/ItemCondition";
import DropDown from "~/components/atoms/adminEditAccount/DropDown";

interface Props {
  id: string;
  title: string;
  selectText: string;
  options: string[];
  required: boolean;
  condition?: string;
  onChangeSelect: (id: string, value: string) => void;
}

const ItemSelectField = ({
  id,
  title,
  selectText,
  options,
  required,
  condition,
  onChangeSelect,
}: Props) => {
  return (
    <ItemInputFieldBox>
      <ItemTitle id={id} text={title} required={required} />
      <DropDown id={id} text={selectText} options={options} onChangeSelect={onChangeSelect} />
      {condition && <ItemCondition text={condition} />}
    </ItemInputFieldBox>
  );
};

export default ItemSelectField;
