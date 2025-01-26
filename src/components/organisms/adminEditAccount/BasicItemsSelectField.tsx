import { BasicItemsSelectFieldBox } from "./BasicItemsSelectFieldStyles";
import { useState } from "react";
import BELONG_DATA from "~/constants/belongData";
import USER_TYPE_DATA from "~/constants/userTypeData";
import AUTHORITY_DATA from "~/constants/authorityData";
import ItemSelectField from "~/components/molecules/adminEditAccount/ItemSelectField";

const BasicItemsSelectField = () => {
  const [selectOptions, setSelectOptions] = useState({
    belong: "",
    role: "",
    permission: "",
  });

  const handleSelectOptionsChange = (selectOptions: string) => (value: string) => {
    setSelectOptions((previous) => ({ ...previous, [selectOptions]: value }));
  };

  return (
    <BasicItemsSelectFieldBox>
      <ItemSelectField
        id="adminEditAccountBelong"
        title="소속"
        selectText=""
        required={true}
        options={BELONG_DATA}
        onOptionSelected={handleSelectOptionsChange}
      />
      <ItemSelectField
        id="adminEditAccountRole"
        title="역할"
        selectText=""
        required={true}
        options={USER_TYPE_DATA}
        onOptionSelected={handleSelectOptionsChange}
      />
      <ItemSelectField
        id="adminEditAccountResponsibility"
        title="권한"
        selectText=""
        required={true}
        options={AUTHORITY_DATA}
        onOptionSelected={handleSelectOptionsChange}
      />
    </BasicItemsSelectFieldBox>
  );
};

export default BasicItemsSelectField;
