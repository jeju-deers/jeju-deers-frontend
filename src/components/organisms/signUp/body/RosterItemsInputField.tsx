import ItemInputField from "~/components/molecules/signUp/body/ItemInputField";
import { RosterItemsInputFieldBox } from "./RosterItemsInputFieldStyles";
import { ChangeEvent } from "react";

interface Props {
  onChangeInputSchool: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeInputStudentId: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeInputPositions: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeInputBackNumber: (event: ChangeEvent<HTMLInputElement>) => void;
}
const RosterItemsInputField = ({
  onChangeInputSchool,
  onChangeInputStudentId,
  onChangeInputPositions,
  onChangeInputBackNumber,
}: Props) => {
  return (
    <RosterItemsInputFieldBox>
      <ItemInputField
        id="rosterSchoolFrom"
        text="출신학교"
        required
        onChange={onChangeInputSchool}
      />
      <ItemInputField id="rosterStudentId" text="학번" required onChange={onChangeInputStudentId} />
      <ItemInputField
        id="rosterPosition"
        text="포지션"
        required
        condition="(여러개 입력 가능)"
        onChange={onChangeInputPositions}
      />
      <ItemInputField
        id="rosterBackNumber"
        text="백넘버"
        required
        onChange={onChangeInputBackNumber}
      />
    </RosterItemsInputFieldBox>
  );
};

export default RosterItemsInputField;
