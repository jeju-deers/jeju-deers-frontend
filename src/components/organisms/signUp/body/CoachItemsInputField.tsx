import ItemInputField from "~/components/molecules/signUp/body/ItemInputField";
import { CoachItemsInputFieldBox } from "./CoachItemsInputFieldStyles";
import { ChangeEvent } from "react";

interface Props {
  onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
}

const CoachItemsInputField = ({ onChangeInput }: Props) => {
  return (
    <CoachItemsInputFieldBox>
      <ItemInputField
        id="inputSchool"
        text="출신학교"
        required
        pattern="^(?=.*[\uAC00-\uD7A3])[\uAC00-\uD7A3]*$"
        onChange={onChangeInput}
      />
      <ItemInputField
        id="inputStudentId"
        text="학번"
        required
        pattern="^(?=.*\d)[\d]{2}$"
        onChange={onChangeInput}
      />
      <ItemInputField
        id="inputPositions"
        text="담당"
        required
        pattern="^(?=.*[A-Za-z])[A-Za-z]{2}$"
        condition="(여러개 입력 가능)"
        onChange={onChangeInput}
      />
    </CoachItemsInputFieldBox>
  );
};

export default CoachItemsInputField;
