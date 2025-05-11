import ItemInputField from "~/common/components/molecules/accountManagement/body/ItemInputField";
import { PlayerItemsInputFieldBox } from "./PlayerItemsInputFieldStyles";
import { ChangeEvent } from "react";

interface Props {
  temporaryUserInformation: {
    inputSchool?: string;
    inputStudentId?: string;
    inputPositions?: string;
    inputBackNumber?: string;
    inputBelong?: string;
    inputJoinYear?: string;
  };
  onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
}

const PlayerItemsInputField = ({ temporaryUserInformation, onChangeInput }: Props) => {
  const temporarySchool = temporaryUserInformation.inputSchool;
  const temporaryStudentId = temporaryUserInformation.inputStudentId;
  const temporaryPositions = temporaryUserInformation.inputPositions;
  const temporaryBackNumber = temporaryUserInformation.inputBackNumber;
  const temporaryBelong = temporaryUserInformation.inputBelong;
  const temporaryJoinYear = temporaryUserInformation.inputJoinYear;

  return (
    <PlayerItemsInputFieldBox>
      <ItemInputField
        id="inputSchool"
        text="출신학교"
        value={temporarySchool}
        required={false}
        pattern="^(?=.*[\uAC00-\uD7A3])[\uAC00-\uD7A3]*$"
        onChange={onChangeInput}
      />
      <ItemInputField
        id="inputStudentId"
        text="학번"
        value={temporaryStudentId}
        required={false}
        pattern="^(?=.*\d)[\d]{2}$"
        onChange={onChangeInput}
      />
      <ItemInputField
        id="inputPositions"
        text="포지션"
        value={temporaryPositions}
        required={false}
        pattern="^(?=.*[A-Za-z])[A-Za-z]{2}$"
        condition="(여러개 입력 가능)"
        onChange={onChangeInput}
      />
      <ItemInputField
        id="inputBackNumber"
        text="백넘버"
        value={temporaryBackNumber}
        required={false}
        pattern="^(?=.*\d)[\d]{1,3}$"
        onChange={onChangeInput}
      />
      <ItemInputField
        id="inputBelong"
        text="소속"
        value={temporaryBelong}
        required={false}
        pattern="(?=.*[A-Za-z])[A-Za-z]{2}$"
        onChange={onChangeInput}
      />
      <ItemInputField
        id="inputJoinYear"
        text="입단년도"
        value={temporaryJoinYear}
        required={false}
        pattern="^(?=.*\d)[\d]{4}$"
        onChange={onChangeInput}
      />
    </PlayerItemsInputFieldBox>
  );
};

export default PlayerItemsInputField;
