import ItemInputField from "~/components/molecules/myPage/body/ItemInputField";
import { ExternalItemsInputFieldBox } from "./ExternalItemsInputFieldStyles";
import { ChangeEvent } from "react";

interface Props {
  temporaryUserInformation: {
    inputId: string;
    inputName: string;
    inputNickname: string;
    inputEmail: string;
  };
  onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
}

const ExternalItemsInputField = ({ temporaryUserInformation, onChangeInput }: Props) => {
  const temporaryUserId = temporaryUserInformation.inputId;
  const temporaryName = temporaryUserInformation.inputName;
  const temporaryNickname = temporaryUserInformation.inputNickname;
  const temporaryEmail = temporaryUserInformation.inputEmail;

  return (
    <ExternalItemsInputFieldBox>
      <ItemInputField
        id="inputId"
        text="아이디"
        value={temporaryUserId}
        required={false}
        pattern="^[A-Za-z\d$@$!%*#?&\uAC00-\uD7A3]*$"
        onChange={onChangeInput}
      />
      <ItemInputField
        id="password"
        text="비밀번호"
        required={false}
        pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&\uAC00-\uD7A3]{6,}$"
        condition="(6자리 이상, 영문과 숫자 포함)"
        onChange={onChangeInput}
      />
      <ItemInputField
        id="passwordConfirm"
        text="비밀번호 확인"
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
        id="inputEmail"
        text="이메일"
        value={temporaryEmail}
        required={false}
        onChange={onChangeInput}
      />
    </ExternalItemsInputFieldBox>
  );
};

export default ExternalItemsInputField;
