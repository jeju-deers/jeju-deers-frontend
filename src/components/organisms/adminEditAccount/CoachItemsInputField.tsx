import ItemInputField from "~/common/components/molecules/accountManagement/body/ItemInputField";
import { CoachItemsInputFieldBox } from "./CoachItemsInputFieldStyles";
import { ChangeEvent } from "react";

interface Props {
  userInformation: {
    adminEditAccountSchool: string;
    adminEditAccountStudentId: string;
    adminEditAccountPositions: string;
    adminEditAccountInChange: string;
  };
  onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
}

const CoachItemsInputField = ({ userInformation, onChangeInput }: Props) => {
  const {
    adminEditAccountSchool,
    adminEditAccountStudentId,
    adminEditAccountPositions,
    adminEditAccountInChange,
  } = userInformation;

  return (
    <CoachItemsInputFieldBox>
      <ItemInputField
        id="adminEdiAccountSchool"
        text="출신학교"
        value={adminEditAccountSchool}
        required={true}
        pattern="^(?=.*[\uAC00-\uD7A3])[\uAC00-\uD7A3]*$"
        onChange={onChangeInput}
      />
      <ItemInputField
        id="adminEditUserStudentId"
        text="학번"
        value={adminEditAccountStudentId}
        required={true}
        pattern="^(?=.*\d)[\d]{2}$"
        onChange={onChangeInput}
      />
      <ItemInputField
        id="adminEditUserPositions"
        text="포지션"
        value={adminEditAccountPositions}
        required={true}
        pattern="^(?=.*[A-Za-z])[A-Za-z]{2}$"
        condition="(여러개 입력 가능)"
        onChange={onChangeInput}
      />
      <ItemInputField
        id="adminEditUserInChange"
        text="담당"
        value={adminEditAccountInChange}
        required={true}
        pattern="^(?=.*[A-Za-z])[A-Za-z]{2}$"
        condition="(여러개 입력 가능)"
        onChange={onChangeInput}
      />
    </CoachItemsInputFieldBox>
  );
};

export default CoachItemsInputField;
