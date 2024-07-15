import ItemInputField from "~/components/molecules/signUp/body/ItemInputField";
import { CoachItemsInputFieldBox } from "./CoachItemsInputFieldStyles";
import { ChangeEvent } from "react";

interface Props {
  onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
}

const CoachItemsInputField = ({ onChangeInput }: Props) => {
  return (
    <CoachItemsInputFieldBox>
      <ItemInputField id="inputSchool" text="출신학교" required onChange={onChangeInput} />
      <ItemInputField id="inputStudentId" text="학번" required onChange={onChangeInput} />
      <ItemInputField
        id="inputPositions"
        text="담당"
        required
        condition="(여러개 입력 가능)"
        onChange={onChangeInput}
      />
    </CoachItemsInputFieldBox>
  );
};

export default CoachItemsInputField;
