import ItemInputField from "~/common/components/molecules/accountManagement/body/ItemInputField";
import { PlayerItemsInputFieldBox } from "./PlayerItemsInputFieldStyles";
import { ChangeEvent } from "react";

interface Props {
  userInformation: {
    adminEditAccountSchool: string;
    adminEditAccountStudentId: string;
    adminEditAccountPositions: string;
  };
  onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
}

const PlayerItemsInputField = ({ userInformation, onChangeInput }: Props) => {
  const { adminEditAccountSchool, adminEditAccountStudentId, adminEditAccountPositions } =
    userInformation;

  return (
    <PlayerItemsInputFieldBox>
      <ItemInputField
        id="adminEditAccountSchool"
        text="출신학교"
        value={adminEditAccountSchool}
        required={true}
        pattern="^(?=.*[\uAC00-\uD7A3])[\uAC00-\uD7A3]*$"
        onChange={onChangeInput}
      />
      <ItemInputField
        id="adminEditAccountStudentId"
        text="학번"
        value={adminEditAccountStudentId}
        required={true}
        pattern="^(?=.*\d)[\d]{2}$"
        onChange={onChangeInput}
      />
      <ItemInputField
        id="adminEditAccountPositions"
        text="포지션"
        value={adminEditAccountPositions}
        required={true}
        pattern="^(?=.*[A-Za-z])[A-Za-z]{2}$"
        condition="(여러개 입력 가능)"
        onChange={onChangeInput}
      />
    </PlayerItemsInputFieldBox>
  );
};

export default PlayerItemsInputField;
