import ItemInputField from "~/components/molecules/signUp/body/ItemInputField";
import { CoachesStaffItemsInputFieldBox } from "./CoachesStaffItemsInputFieldStyles";
import { ChangeEvent } from "react";

interface Props {
  onChangeInputSchool: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeInputStudentId: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeInputPositions: (event: ChangeEvent<HTMLInputElement>) => void;
}

const CoachesStaffItemsInputField = ({
  onChangeInputSchool,
  onChangeInputStudentId,
  onChangeInputPositions,
}: Props) => {
  return (
    <CoachesStaffItemsInputFieldBox>
      <ItemInputField
        id="coachesStaffSchoolFrom"
        text="출신학교"
        required
        onChange={onChangeInputSchool}
      />
      <ItemInputField
        id="coachesStaffStudentId"
        text="학번"
        required
        onChange={onChangeInputStudentId}
      />
      <ItemInputField
        id="coachesStaffResponsibility"
        text="담당"
        required
        condition="(여러개 입력 가능)"
        onChange={onChangeInputPositions}
      />
    </CoachesStaffItemsInputFieldBox>
  );
};

export default CoachesStaffItemsInputField;
