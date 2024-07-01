import ItemInputField from "~/components/molecules/signUp/body/ItemInputField";
import { PlayerItemsInputFieldBox } from "./PlayerItemsInputFieldStyles";
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
    <PlayerItemsInputFieldBox>
      <ItemInputField id="playerSchool" text="출신학교" required onChange={onChangeInputSchool} />
      <ItemInputField id="playerStudentId" text="학번" required onChange={onChangeInputStudentId} />
      <ItemInputField
        id="playerPositions"
        text="포지션"
        required
        condition="(여러개 입력 가능)"
        onChange={onChangeInputPositions}
      />
      <ItemInputField
        id="playerBackNumber"
        text="백넘버"
        required
        onChange={onChangeInputBackNumber}
      />
    </PlayerItemsInputFieldBox>
  );
};

export default RosterItemsInputField;
