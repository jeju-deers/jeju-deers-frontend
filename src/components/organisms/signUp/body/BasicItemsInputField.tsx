import ItemInputField from "~/components/molecules/signUp/body/ItemInputField";
import { BasicItemsInputFieldBox } from "./BasicItemsInputFieldStyles";
import { ChangeEvent } from "react";

interface Props {
  onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
}

const BasicItemsInputField = ({ onChangeInput }: Props) => {
  return (
    <BasicItemsInputFieldBox>
      <ItemInputField
        id="inputId"
        text="아이디"
        required
        pattern="^[A-Za-z\d$@$!%*#?&\uAC00-\uD7A3]*$"
        onChange={onChangeInput}
      />
      <ItemInputField
        type="password"
        id="inputPassword"
        text="비밀번호"
        required
        pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&\uAC00-\uD7A3]{6,}$"
        condition="(6자리 이상, 영문과 숫자 포함)"
        onChange={onChangeInput}
      />
      <ItemInputField
        type="password"
        id="inputPasswordConfirm"
        text="비밀번호 확인"
        required
        pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&\uAC00-\uD7A3]{6,}$"
        onChange={onChangeInput}
      />
      <ItemInputField
        id="inputName"
        text="이름"
        required
        pattern="^[A-Za-z\uAC00-\uD7A3]*$"
        onChange={onChangeInput}
      />
      <ItemInputField
        id="inputNickname"
        text="닉네임"
        required={false}
        pattern="^[A-Za-z\d$@$!%*#?&\uAC00-\uD7A3]*$"
        onChange={onChangeInput}
      />
      <ItemInputField
        type="email"
        id="inputEmail"
        text="이메일"
        required
        onChange={onChangeInput}
      />
    </BasicItemsInputFieldBox>
  );
};

export default BasicItemsInputField;
