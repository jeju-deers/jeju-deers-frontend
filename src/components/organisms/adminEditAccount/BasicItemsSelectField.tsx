import { BasicItemsSelectFieldBox } from "./BasicItemsSelectFieldStyles";
import BELONG_DATA from "~/constants/belongData";
import USER_TYPE_DATA from "~/constants/userTypeData";
import AUTHORITY_DATA from "~/constants/authorityData";
import ItemSelectField from "~/components/molecules/adminEditAccount/ItemSelectField";

interface Props {
  userInformation: {
    adminEditAccountBelong: string;
    adminEditAccountUserType: string;
    adminEditAccountPermission: string;
  };
  onChangeSelect: (id: string, value: string) => void;
}

const BasicItemsSelectField = ({ userInformation, onChangeSelect }: Props) => {
  const { adminEditAccountBelong, adminEditAccountUserType, adminEditAccountPermission } =
    userInformation;

  const getUserTypeKorean = (userType: string) => {
    switch (userType) {
      case "player":
        return "선수";
      case "coach":
        return "코치";
      case "staff":
        return "스태프";
      case "external":
        return "외부인";
      default:
        return "외부인";
    }
  };

  const getPermissionKorean = (permission: string) => {
    switch (permission) {
      case "normal":
        return "일반 회원";
      case "admin":
        return "관리자";
      case "guest":
        return "외부 회원";
      default:
        return "외부 회원";
    }
  };

  return (
    <BasicItemsSelectFieldBox>
      <ItemSelectField
        id="adminEditAccountBelong"
        title="소속"
        selectText={adminEditAccountBelong}
        required={true}
        options={BELONG_DATA}
        onChangeSelect={onChangeSelect}
      />
      <ItemSelectField
        id="adminEditAccountUserType"
        title="역할"
        selectText={getUserTypeKorean(adminEditAccountUserType)}
        required={true}
        options={USER_TYPE_DATA}
        onChangeSelect={onChangeSelect}
      />
      {/* TODO: [2025-03-03] 현재 permission 값 변경을 요청했을 때 변경된 값이 반환되지 않아, 백엔드에서 코드 수정 이후 재확인이 필요합니다.*/}
      <ItemSelectField
        id="adminEditAccountPermission"
        title="권한"
        selectText={getPermissionKorean(adminEditAccountPermission)}
        required={true}
        options={AUTHORITY_DATA}
        onChangeSelect={onChangeSelect}
      />
    </BasicItemsSelectFieldBox>
  );
};

export default BasicItemsSelectField;
