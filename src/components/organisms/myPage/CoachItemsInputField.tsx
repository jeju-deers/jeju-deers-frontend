import ItemInputField from "~/components/molecules/myPage/body/ItemInputField";
import { CoachItemsInputFieldBox } from "./CoachItemsInputFieldStyles";
import { ChangeEvent } from "react";

interface Props {
  temporaryUserInformation: {
    inputSchool: string;
    inputStudentId: string;
    inputPositions: string;
  };
  onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
}

const CoachItemsInputField = ({ temporaryUserInformation, onChangeInput }: Props) => {
  const temporarySchool = temporaryUserInformation.inputSchool;
  const temporaryStudentId = temporaryUserInformation.inputStudentId;
  const temporaryPositions = temporaryUserInformation.inputPositions;

  return (
    <CoachItemsInputFieldBox>
      <ItemInputField
        id="inputSchool"
        text="출신학교"
        value={temporarySchool}
        required={false}
        onChange={onChangeInput}
      />
      <ItemInputField
        id="inputStudentId"
        text="학번"
        value={temporaryStudentId}
        required={false}
        onChange={onChangeInput}
      />
      <ItemInputField
        id="inputPositions"
        text="담당"
        value={temporaryPositions}
        required={false}
        condition="(여러개 입력 가능)"
        onChange={onChangeInput}
      />
    </CoachItemsInputFieldBox>
  );
};

export default CoachItemsInputField;
