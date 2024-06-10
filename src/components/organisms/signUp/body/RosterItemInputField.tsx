import ItemInputField from "~/components/molecules/signUp/body/ItemInputField";
import { ItemsInputFieldBox, SeparateLineWrap } from "./ItemsInputFieldStyles";
import { SeparateLineBox } from "~/components/atoms/signUp/body/SeparateLineStyles";

const RosterItemInputField = () => {
  return (
    <>
      <SeparateLineWrap>
        <SeparateLineBox />
      </SeparateLineWrap>
      <ItemsInputFieldBox>
        <ItemInputField id="rosterSchoolFrom" text="출신학교" required />
        <ItemInputField id="rosterStudentId" text="학번" required />
        <ItemInputField id="rosterPosition" text="포지션" required condition="(여러개 입력 가능)" />
        <ItemInputField id="rosterBackNumber" text="백넘버" required />
      </ItemsInputFieldBox>
    </>
  );
};

export default RosterItemInputField;
