import ItemInputField from "~/components/molecules/signUp/body/ItemInputField";
import { ItemsInputFieldBox, SeparateLineWrap } from "./ItemsInputFieldStyles";
import { SeparateItemLineBox } from "~/components/atoms/signUp/body/SeparateItemLineStyles";

const BasicItemsInputField = () => {
  return (
    <>
      <SeparateLineWrap>
        <SeparateItemLineBox />
      </SeparateLineWrap>
      <ItemsInputFieldBox>
        <ItemInputField id="id" text="아이디" required />
        <ItemInputField
          id="password"
          text="비밀번호"
          required
          condition="(6자리 이상, 영문과 숫자 포함)"
        />
        <ItemInputField id="passwordConfirm" text="비밀번호 확인" required />
        <ItemInputField id="userName" text="이름" required />
        <ItemInputField id="userNickName" text="닉네임" required={false} />
        <ItemInputField id="userEMail" text="이메일" required />
      </ItemsInputFieldBox>
    </>
  );
};

export default BasicItemsInputField;
