import ItemInputField from "~/common/components/molecules/accountManagement/body/ItemInputField";
import { BasicItemsInputFieldBox } from "./BasicItemsInputFieldStyles";
import { ChangeEvent } from "react";

interface Props {
  userInformation: {
    adminEditAccountName: string;
    adminEditAccountNickname?: string;
    adminEditAccountEmail: string;
  };
  onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
}

const BasicItemsInputField = ({ userInformation, onChangeInput }: Props) => {
  const { adminEditAccountName, adminEditAccountNickname, adminEditAccountEmail } = userInformation;

  return (
    <BasicItemsInputFieldBox>
      <ItemInputField
        id="adminEditAccountName"
        text="이름"
        value={adminEditAccountName}
        required={true}
        pattern="^[A-Za-z\uAC00-\uD7A3]*$"
        onChange={onChangeInput}
      />
      <ItemInputField
        id="adminEditUserNickName"
        text="닉네임"
        value={adminEditAccountNickname}
        required={false}
        pattern="^[A-Za-z\d$@$!%*#?&\uAC00-\uD7A3]*$"
        onChange={onChangeInput}
      />
      <ItemInputField
        id="adminEditAccountEmail"
        text="이메일"
        value={adminEditAccountEmail}
        required={true}
        onChange={onChangeInput}
      />
    </BasicItemsInputFieldBox>
  );
};

export default BasicItemsInputField;
