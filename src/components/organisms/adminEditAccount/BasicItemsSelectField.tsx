import ItemInputField from "~/common/components/molecules/accountManagement/body/ItemInputField";
import { BasicItemsSelectFieldBox } from "./BasicItemsSelectFieldStyles";
import { ChangeEvent } from "react";

interface Props {
  userInformation: {
    adminEditAccountBelong: string;
    adminEditAccountRole?: string;
    adminEditAccountResponsibility: string;
  };
  onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
}

const BasicItemsSelectField = ({ userInformation, onChangeInput }: Props) => {
  const { adminEditAccountBelong, adminEditAccountRole, adminEditAccountResponsibility } =
    userInformation;

  return (
    <BasicItemsSelectFieldBox>
      <ItemInputField
        id="adminEditAccountBelong"
        text="소속"
        value={adminEditAccountBelong}
        required={true}
        pattern="^[A-Za-z\uAC00-\uD7A3]*$"
        onChange={onChangeInput}
      />
      <ItemInputField
        id="adminEditAccountRole"
        text="역할"
        value={adminEditAccountRole}
        required={true}
        pattern="^[A-Za-z\d$@$!%*#?&\uAC00-\uD7A3]*$"
        onChange={onChangeInput}
      />
      <ItemInputField
        id="adminEditAccountResponsibility"
        text="권한"
        value={adminEditAccountResponsibility}
        required={true}
        onChange={onChangeInput}
      />
    </BasicItemsSelectFieldBox>
  );
};

export default BasicItemsSelectField;
