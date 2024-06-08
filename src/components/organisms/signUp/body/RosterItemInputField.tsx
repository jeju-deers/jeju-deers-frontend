import ItemInputField from "~/components/molecules/signUp/body/ItemInputField";
import { RosterItemInputFieldBox } from "./RosterItemInputFieldStyles";

const RosterItemInputField = () => {
  return (
    <RosterItemInputFieldBox>
      <ItemInputField id="rosterSchoolFrom" text="출신학교" required />
      <ItemInputField id="rosterStudentId" text="학번" required />
      <ItemInputField id="rosterPosition" text="포지션" required condition="(여러개 입력 가능)" />
      <ItemInputField id="rosterBackNumber" text="백넘버" required />
    </RosterItemInputFieldBox>
  );
};

export default RosterItemInputField;
