import ItemInputField from "~/common/components/molecules/accountManagement/body/ItemInputField";
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

  // TODO: [2024-09-07] 추후 회원가입과 마이페이지에 유사한 컴포넌트 병합 시, required 속성과 essential이모지를 함께 적용하도록 둔 컴포넌트를 분리해합니다.
  return (
    <BasicItemsInputFieldBox>
      <ItemInputField
        id="inputId"
        text="아이디"
        value={temporaryUserId}
        required={false}
        pattern="^[A-Za-z\d$@$!%*#?&\uAC00-\uD7A3]*$"
        onChange={onChangeInput}
      />
      <ItemInputField
        id="inputPassword"
        text="비밀번호"
        value={temporaryPassword}
        required={false}
        pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&\uAC00-\uD7A3]{6,}$"
        condition="(6자리 이상, 영문과 숫자 포함)"
        onChange={onChangeInput}
      />
      <ItemInputField
        id="inputPasswordConfirm"
        text="비밀번호 확인"
        value={temporaryPasswordConfirm}
        required={false}
        pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&\uAC00-\uD7A3]{6,}$"
        onChange={onChangeInput}
      />
      <ItemInputField
        id="inputName"
        text="이름"
        value={temporaryName}
        required={false}
        pattern="^[A-Za-z\uAC00-\uD7A3]*$"
        onChange={onChangeInput}
      />
      <ItemInputField
        id="inputNickname"
        text="닉네임"
        value={temporaryNickname}
        required={false}
        pattern="^[A-Za-z\d$@$!%*#?&\uAC00-\uD7A3]*$"
        onChange={onChangeInput}
      />
      <ItemInputField
        id="inputBirth"
        text="생년월일"
        value={temporaryBirth}
        required={false}
        pattern="^\d{4}\.\d{2}\.\d{2}$"
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
