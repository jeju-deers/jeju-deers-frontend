import ItemInputField from "~/components/molecules/myPage/body/ItemInputField";
import { ExternalItemsInputFieldBox } from "./ExternalItemsInputFieldStyles";

interface Props {
  temporaryUserInformation: {
    userId: string;
    name: string;
    nickname: string;
    birth: string;
    email: string;
  };
}

const ExternalItemsInputField = ({ temporaryUserInformation }: Props) => {
  const temporaryUserId = temporaryUserInformation.userId;
  const temporaryName = temporaryUserInformation.name;
  const temporaryNickname = temporaryUserInformation.nickname;
  const temporaryEmail = temporaryUserInformation.email;

  return (
    <ExternalItemsInputFieldBox>
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
      <ItemInputField id="userEmail" text="이메일" value={temporaryEmail} required={false} />
    </ExternalItemsInputFieldBox>
  );
};

export default ExternalItemsInputField;
