import ItemInputField from "~/components/molecules/myPage/body/ItemInputField";
import { CoachItemsInputFieldBox } from "./CoachItemsInputFieldStyles";

interface Props {
  temporaryUserInformation: {
    school?: string;
    studentId?: string;
    positions?: string;
  };
}

const CoachItemsInputField = ({ temporaryUserInformation }: Props) => {
  const temporarySchool = temporaryUserInformation.school;
  const temporaryStudentId = temporaryUserInformation.studentId;
  const temporaryPositions = temporaryUserInformation.positions;

  return (
    <CoachItemsInputFieldBox>
      <ItemInputField
        id="coachSchoolFrom"
        text="출신학교"
        value={temporarySchool}
        required={false}
      />
      <ItemInputField id="coachStudentId" text="학번" value={temporaryStudentId} required={false} />
      <ItemInputField
        id="coachResponsibility"
        text="담당"
        value={temporaryPositions}
        required={false}
        condition="(여러개 입력 가능)"
      />
    </CoachItemsInputFieldBox>
  );
};

export default CoachItemsInputField;
