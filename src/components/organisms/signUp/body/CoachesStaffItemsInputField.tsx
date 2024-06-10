import ItemInputField from "~/components/molecules/signUp/body/ItemInputField";
import { ItemsInputFieldBox, SeparateLineWrap } from "./ItemsInputFieldStyles";
import { SeparateLineBox } from "~/components/atoms/signUp/body/SeparateLineStyles";

const CoachesStaffItemsInputField = () => {
  return (
    <>
      <SeparateLineWrap>
        <SeparateLineBox />
      </SeparateLineWrap>
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
    </>
  );
};

export default CoachesStaffItemsInputField;
