import { BasicItemsSelectFieldBox } from "./BasicItemsSelectFieldStyles";
import BELONG_DATA from "~/constants/belongData";
import USER_TYPE_DATA from "~/constants/userTypeData";
import AUTHORITY_DATA from "~/constants/authorityData";
import ItemSelectField from "~/components/molecules/adminEditAccount/ItemSelectField";
import { ChangeEvent, useState } from "react";

interface Props {
  userInformation: {
    adminEditAccountBelong: string;
    adminEditAccountRole: string;
    adminEditAccountResponsibility: string;
  };
}

const BasicItemsSelectField = ({ userInformation }: Props) => {
  const { adminEditAccountBelong, adminEditAccountRole, adminEditAccountResponsibility } =
    userInformation;

  const [selectOptions, setSelectOptions] = useState({
    belong: adminEditAccountBelong || "전체",
    role: adminEditAccountRole || "전체",
    permission: adminEditAccountResponsibility || "전체",
  });

  const handleSelectOptionsChange =
    (selectOptions: string) => (event: ChangeEvent<HTMLSelectElement>) => {
      const { value } = event.target;
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
