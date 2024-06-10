import ItemInputField from "~/components/molecules/signUp/body/ItemInputField";
import { ItemsInputFieldBox, SeparateLineWrap } from "./ItemsInputFieldStyles";
import { SeparateItemLineBox } from "~/components/atoms/signUp/body/SeparateItemLineStyles";

const CoachesStaffItemsInputField = () => {
  return (
    <>
      <SeparateLineWrap>
        <SeparateItemLineBox />
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
