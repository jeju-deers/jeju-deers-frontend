import ItemInputField from "~/components/molecules/signUp/body/ItemInputField";
import { CoachesStaffItemInputFieldBox } from "./CoachesStaffItemInputFieldStyles";

const CoachesStaffItemInputField = () => {
  return (
    <CoachesStaffItemInputFieldBox>
      <ItemInputField id="coachesStaffSchoolFrom" text="출신학교" required />
      <ItemInputField id="coachesStaffStudentId" text="학번" required />
      <ItemInputField
        id="coachesStaffResponsibility"
        text="담당"
        required
        condition="(여러개 입력 가능)"
      />
    </CoachesStaffItemInputFieldBox>
  );
};

export default CoachesStaffItemInputField;
