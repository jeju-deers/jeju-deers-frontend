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
      <ItemSelectField
        id="adminEditAccountPermission"
        title="권한"
        selectText={adminEditAccountPermission}
        required={true}
        options={AUTHORITY_DATA}
        onChangeSelect={onChangeSelect}
      />
    </BasicItemsSelectFieldBox>
  );
};

export default BasicItemsSelectField;
