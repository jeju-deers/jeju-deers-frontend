import ItemInputField from "~/components/molecules/signUp/body/ItemInputField";
import { BasicItemsInputFieldBox } from "./BasicItemsInputFieldStyles";
import { ChangeEvent } from "react";

interface Props {
  onChangeInputId: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeInputPassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeInputPasswordConfirm: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeInputName: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeInputNickname: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeInputEmail: (event: ChangeEvent<HTMLInputElement>) => void;
}

const BasicItemsInputField = ({
  onChangeInputId,
  onChangeInputPassword,
  onChangeInputPasswordConfirm,
  onChangeInputName,
  onChangeInputNickname,
  onChangeInputEmail,
}: Props) => {
  return (
    <BasicItemsInputFieldBox>
      <ItemInputField id="userId" text="아이디" required onChange={onChangeInputId} />
      <ItemInputField
        id="password"
        text="비밀번호"
        required
        condition="(6자리 이상, 영문과 숫자 포함)"
        onChange={onChangeInputPassword}
      />
      <ItemInputField
        id="passwordConfirm"
        text="비밀번호 확인"
        required
        onChange={onChangeInputPasswordConfirm}
      />
      <ItemInputField id="name" text="이름" required onChange={onChangeInputName} />
      <ItemInputField
        id="nickname"
        text="닉네임"
        required={false}
        onChange={onChangeInputNickname}
      />
      <ItemInputField id="email" text="이메일" required onChange={onChangeInputEmail} />
    </BasicItemsInputFieldBox>
  );
};

export default BasicItemsInputField;
