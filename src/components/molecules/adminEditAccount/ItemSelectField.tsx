import ItemTitle from "~/common/components/atom/accountManagement/body/ItemTitle";
import { ItemInputFieldBox } from "./ItemSelectFieldStyles";
import ItemCondition from "~/common/components/atom/accountManagement/body/ItemCondition";
import Dropdown from "~/components/atoms/adminEditAccount/Dropdown";
import { UserTypeData } from "~/constants/userTypeData";

interface Props {
  id: string;
  title: string;
  selectText: string;
  options: UserTypeData[] | string[];
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
      <Dropdown id={id} text={selectText} options={options} onChangeSelect={onChangeSelect} />
      {condition && <ItemCondition text={condition} />}
    </ItemInputFieldBox>
  );
};

export default ItemSelectField;
