import { BasicItemsSelectFieldBox } from "./BasicItemsSelectFieldStyles";
import { useState } from "react";
import BELONG_DATA from "~/constants/belongData";
import USER_TYPE_DATA from "~/constants/userTypeData";
import AUTHORITY_DATA from "~/constants/authorityData";
import ItemSelectField from "~/components/molecules/adminEditAccount/ItemSelectField";

interface Props {
  belong: string;
  role: string;
  permission: string;
}

const BasicItemsSelectField = ({ belong, role, permission }: Props) => {
  const [selectOptions, setSelectOptions] = useState({
    belong: belong || "전체",
    role: role || "전체",
    permission: permission || "전체",
  });

  const handleSelectOptionsChange = (selectOptions: string) => (value: string) => {
    setSelectOptions((previous) => ({ ...previous, [selectOptions]: value }));
  };

  return (
    <BasicItemsSelectFieldBox>
      <ItemSelectField
        id="adminEditAccountBelong"
        title="소속"
        selectText={selectOptions.belong}
        required={true}
        options={BELONG_DATA}
        onOptionSelected={handleSelectOptionsChange}
      />
      <ItemSelectField
        id="adminEditAccountRole"
        title="역할"
        selectText={selectOptions.role}
        required={true}
        options={USER_TYPE_DATA}
        onOptionSelected={handleSelectOptionsChange}
      />
      <ItemSelectField
        id="adminEditAccountResponsibility"
        title="권한"
        selectText={selectOptions.permission}
        required={true}
        options={AUTHORITY_DATA}
        onOptionSelected={handleSelectOptionsChange}
      />
    </BasicItemsSelectFieldBox>
  );
};

export default BasicItemsSelectField;
