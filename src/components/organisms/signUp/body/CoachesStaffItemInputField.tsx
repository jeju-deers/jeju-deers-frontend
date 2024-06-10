import ItemInputField from "~/components/molecules/signUp/body/ItemInputField";
import { ItemsInputFieldBox } from "./ItemsInputFieldStyles";

const CoachesStaffItemInputField = () => {
  return (
    <ItemsInputFieldBox>
      <ItemInputField id="coachesStaffSchoolFrom" text="출신학교" required />
      <ItemInputField id="coachesStaffStudentId" text="학번" required />
      <ItemInputField
        id="coachesStaffResponsibility"
        text="담당"
        required
        condition="(여러개 입력 가능)"
      />
    </ItemsInputFieldBox>
  );
};

export default CoachesStaffItemInputField;
