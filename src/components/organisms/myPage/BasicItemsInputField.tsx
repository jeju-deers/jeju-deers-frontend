import ItemInputField from "~/components/molecules/myPage/body/ItemInputField";
import { BasicItemsInputFieldBox } from "./BasicItemsInputFieldStyles";

const BasicItemsInputField = () => {
  return (
    <BasicItemsInputFieldBox>
      <ItemInputField id="id" text="아이디" required={false} />
      <ItemInputField
        id="password"
        text="비밀번호"
        required={false}
        condition="(6자리 이상, 영문과 숫자 포함)"
      />
      <ItemInputField id="passwordConfirm" text="비밀번호 확인" required={false} />
      <ItemInputField id="userName" text="이름" required={false} />
      <ItemInputField id="userNickName" text="닉네임" required={false} />
      <ItemInputField id="userEmail" text="이메일" required={false} />
    </BasicItemsInputFieldBox>
  );
};

export default BasicItemsInputField;
