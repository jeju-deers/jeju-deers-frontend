import ItemInputField from "~/components/molecules/signUp/body/ItemInputField";
import { CoachesStaffItemsInputFieldBox } from "./CoachesStaffItemsInputFieldStyles";

const CoachesStaffItemsInputField = () => {
  return (
    <CoachesStaffItemsInputFieldBox>
      <ItemInputField id="coachesStaffSchoolFrom" text="출신학교" required />
      <ItemInputField id="coachesStaffStudentId" text="학번" required />
      <ItemInputField
        id="coachesStaffResponsibility"
        text="담당"
        required
        condition="(여러개 입력 가능)"
      />
    </CoachesStaffItemsInputFieldBox>
  );
};

export default CoachesStaffItemsInputField;
