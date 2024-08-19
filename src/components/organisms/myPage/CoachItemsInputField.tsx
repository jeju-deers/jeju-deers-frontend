import ItemInputField from "~/components/molecules/myPage/body/ItemInputField";
import { CoachItemsInputFieldBox } from "./CoachItemsInputFieldStyles";

const CoachItemsInputField = () => {
  return (
    <CoachItemsInputFieldBox>
      <ItemInputField id="coachSchoolFrom" text="출신학교" required={false} />
      <ItemInputField id="coachStudentId" text="학번" required={false} />
      <ItemInputField
        id="coachResponsibility"
        text="담당"
        required={false}
        condition="(여러개 입력 가능)"
      />
    </CoachItemsInputFieldBox>
  );
};

export default CoachItemsInputField;
