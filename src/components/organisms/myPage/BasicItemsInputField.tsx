import ItemInputField from "~/components/molecules/myPage/body/ItemInputField";
import { BasicItemsInputFieldBox } from "./BasicItemsInputFieldStyles";

interface Props {
  temporaryUserInformation: {
    userId?: string;
    name?: string;
    nickname?: string;
    birth?: string;
    email?: string;
  };
}

const BasicItemsInputField = ({ temporaryUserInformation }: Props) => {
  const temporaryUserId = temporaryUserInformation.userId;
  const temporaryName = temporaryUserInformation.name;
  const temporaryNickname = temporaryUserInformation.nickname;
  const temporaryBirth = temporaryUserInformation.birth;
  const temporaryEmail = temporaryUserInformation.email;

  return (
    <BasicItemsInputFieldBox>
      <ItemInputField id="id" text="아이디" value={temporaryUserId} required={false} />
      <ItemInputField
        id="password"
        text="비밀번호"
        required={false}
        condition="(6자리 이상, 영문과 숫자 포함)"
      />
      <ItemInputField id="passwordConfirm" text="비밀번호 확인" required={false} />
      <ItemInputField id="userName" text="이름" value={temporaryName} required={false} />
      <ItemInputField id="userNickName" text="닉네임" value={temporaryNickname} required={false} />
      <ItemInputField id="userBirth" text="생년월일" value={temporaryBirth} required={false} />
      <ItemInputField id="userEmail" text="이메일" value={temporaryEmail} required={false} />
    </BasicItemsInputFieldBox>
  );
};

export default BasicItemsInputField;
