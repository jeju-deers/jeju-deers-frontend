import ItemInputField from "~/components/molecules/myPage/body/ItemInputField";
import { BasicItemsInputFieldBox } from "./BasicItemsInputFieldStyles";
import { ChangeEvent } from "react";

interface Props {
  temporaryUserInformation: {
    inputId: string;
    inputPassword?: string;
    inputPasswordConfirm?: string;
    inputName: string;
    inputNickname?: string;
    inputBirth: string;
    inputEmail: string;
  };
  onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
}

const BasicItemsInputField = ({ temporaryUserInformation, onChangeInput }: Props) => {
  const temporaryUserId = temporaryUserInformation.inputId;
  const temporaryPassword = temporaryUserInformation.inputPassword;
  const temporaryPasswordConfirm = temporaryUserInformation.inputPasswordConfirm;
  const temporaryName = temporaryUserInformation.inputName;
  const temporaryNickname = temporaryUserInformation.inputNickname;
  const temporaryBirth = temporaryUserInformation.inputBirth;
  const temporaryEmail = temporaryUserInformation.inputEmail;

  return (
    <BasicItemsInputFieldBox>
      <ItemInputField
        id="inputId"
        text="아이디"
        value={temporaryUserId}
        required={false}
        onChange={onChangeInput}
      />
      <ItemInputField
        id="inputPassword"
        text="비밀번호"
        value={temporaryPassword}
        required={false}
        condition="(6자리 이상, 영문과 숫자 포함)"
        onChange={onChangeInput}
      />
      <ItemInputField
        id="inputPasswordConfirm"
        text="비밀번호 확인"
        value={temporaryPasswordConfirm}
        required={false}
        onChange={onChangeInput}
      />
      <ItemInputField
        id="inputName"
        text="이름"
        value={temporaryName}
        required={false}
        onChange={onChangeInput}
      />
      <ItemInputField
        id="inputNickname"
        text="닉네임"
        value={temporaryNickname}
        required={false}
        onChange={onChangeInput}
      />
      <ItemInputField
        id="inputBirth"
        text="생년월일"
        value={temporaryBirth}
        required={false}
        onChange={onChangeInput}
      />
      <ItemInputField
        id="inputEmail"
        text="이메일"
        value={temporaryEmail}
        required={false}
        onChange={onChangeInput}
      />
    </BasicItemsInputFieldBox>
  );
};

export default BasicItemsInputField;
