import ItemInputField from "~/components/molecules/signUp/body/ItemInputField";
import { CoachItemsInputFieldBox } from "./CoachItemsInputFieldStyles";
import { ChangeEvent } from "react";

interface Props {
  onChangeInputSchool: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeInputStudentId: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeInputPositions: (event: ChangeEvent<HTMLInputElement>) => void;
}

const CoachItemsInputField = ({
  onChangeInputSchool,
  onChangeInputStudentId,
  onChangeInputPositions,
}: Props) => {
  return (
    <CoachItemsInputFieldBox>
      <ItemInputField
        id="coachSchoolFrom"
        text="출신학교"
        required
        onChange={onChangeInputSchool}
      />
      <ItemInputField id="coachStudentId" text="학번" required onChange={onChangeInputStudentId} />
      <ItemInputField
        id="coachResponsibility"
        text="담당"
        required
        condition="(여러개 입력 가능)"
        onChange={onChangeInputPositions}
      />
    </CoachItemsInputFieldBox>
  );
};

export default CoachItemsInputField;
